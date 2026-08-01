/**
 * Cloud Function that listens for new lead documents in Firestore and
 * publishes their contents to a Pub/Sub topic. Messages include a
 * shared secret attribute for verification by the Apps Script handler.
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { PubSub } = require('@google-cloud/pubsub');

// Initialize the Firebase Admin SDK
admin.initializeApp();

// Initialize Pub/Sub client
const pubsub = new PubSub();

// TODO: Set a strong shared secret here and in the Apps Script. This should
// not be checked into source control for production deployments.
const SHARED_SECRET = 'YOUR_SHARED_SECRET';

/**
 * Triggered when a new document is created in the leads collection. The
 * document data is published to the "new-lead" topic with a secret
 * attribute to authenticate the message consumer.
 */
exports.onLeadCreatePublish = functions.firestore
  .document('leads/{docId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data();
    const messageBuffer = Buffer.from(JSON.stringify(data));
    try {
      await pubsub.topic('new-lead').publish(messageBuffer, { secret: SHARED_SECRET });
      console.log('Lead published to new-lead topic');
    } catch (err) {
      console.error('Error publishing to new-lead topic', err);
    }
  });