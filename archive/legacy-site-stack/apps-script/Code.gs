// Apps Script that receives Pub/Sub push notifications and sends
// notification emails using GmailApp. The script verifies a shared
// secret to ensure only authorised messages are processed.

// TODO: Set your shared secret here. This must match the secret set in
// the Cloud Function publishing to Pub/Sub.
const SHARED_SECRET = 'YOUR_SHARED_SECRET';

// Specify one or more recipient email addresses for lead notifications.
const RECIPIENTS = ['mwu@engineeringxyz.com', 'engineeringxyz.com@gmail.com'];

/**
 * Handles HTTP POST requests from Pub/Sub push subscriptions. Pub/Sub
 * sends messages in the JSON format described here:
 * https://cloud.google.com/pubsub/docs/push#receive_push
 *
 * @param {Object} e Event parameter containing request information.
 * @return {ContentService.TextOutput} Simple text response.
 */
function doPost(e) {
  try {
    // Parse Pub/Sub message wrapper
    const pubsubMessage = JSON.parse(e.postData.contents);
    const secret = pubsubMessage.message.attributes && pubsubMessage.message.attributes.secret;
    if (secret !== SHARED_SECRET) {
      console.warn('Invalid secret received');
      return ContentService.createTextOutput('Unauthorized');
    }

    // Decode base64 data to JSON
    const payload = JSON.parse(Utilities.newBlob(Utilities.base64Decode(pubsubMessage.message.data)).getDataAsString());

    // Compose email content
    const subject = 'New Lead Submission: ' + (payload.name || 'Unknown');
    let body = 'A new lead has been captured via your website:\n\n';
    body += 'Name: ' + (payload.name || '') + '\n';
    body += 'Email: ' + (payload.email || '') + '\n';
    body += 'Phone: ' + (payload.phone || '') + '\n';
    body += 'Message:\n' + (payload.message || '') + '\n\n';
    // Include UTM parameters if present
    body += 'UTM Source: ' + (payload.utm_source || '') + '\n';
    body += 'UTM Medium: ' + (payload.utm_medium || '') + '\n';
    body += 'UTM Campaign: ' + (payload.utm_campaign || '') + '\n';
    body += 'UTM Term: ' + (payload.utm_term || '') + '\n';
    body += 'UTM Content: ' + (payload.utm_content || '') + '\n\n';
    body += 'Page Path: ' + (payload.page_path || '') + '\n';
    body += 'User Agent: ' + (payload.user_agent || '') + '\n';
    body += 'IP Address: ' + (payload.ip || '') + '\n';
    body += 'Timestamp: ' + (payload.timestamp || '') + '\n';

    // Send email to all recipients
    RECIPIENTS.forEach(function(recipient) {
      GmailApp.sendEmail(recipient, subject, body);
    });

    return ContentService.createTextOutput('OK');
  } catch (err) {
    console.error('Error processing Pub/Sub message', err);
    return ContentService.createTextOutput('Error');
  }
}