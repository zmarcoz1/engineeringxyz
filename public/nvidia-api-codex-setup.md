# NVIDIA API + Codex-like Coding Agent Setup

Last updated: 2026-06-27

This note is for setting up a freshly formatted Windows computer so it can use NVIDIA API with coding agents similar to Codex.

## Overall idea

The architecture is:

```text
NVIDIA API = brain
Aider / Cline / Roo Code / OpenHands = coding agents that edit code, run commands, and debug
WSL2 + Docker + Git + VS Code + Python + Node.js = base system
```

Do not start by installing ten different agents. First build one stable setup, then expand later.

---

## 1. Install basic Windows tools

Open PowerShell and run:

```powershell
winget install --id Microsoft.PowerShell -e
winget install --id Git.Git -e
winget install --id Microsoft.VisualStudioCode -e
winget install --id Python.Python.3.12 -e
winget install --id OpenJS.NodeJS.LTS -e
winget install --id Docker.DockerDesktop -e
winget install --id 7zip.7zip -e
```

Then open **PowerShell as Administrator** and install Ubuntu under WSL:

```powershell
wsl --install -d Ubuntu
```

Restart the computer, open Ubuntu, and create your Linux username and password.

Useful references:

- Microsoft WSL install guide: https://learn.microsoft.com/en-us/windows/wsl/install
- Docker Desktop WSL backend: https://docs.docker.com/desktop/features/wsl/

---

## 2. NVIDIA API settings

NVIDIA NIM / NVIDIA API can be used as an OpenAI-compatible API endpoint in many tools.

Use this basic configuration:

```text
Base URL:
https://integrate.api.nvidia.com/v1

API Key:
Your NVIDIA API key

Model ID:
Copy the actual model ID from NVIDIA Build
```

NVIDIA Build:

https://build.nvidia.com/

NVIDIA API docs:

https://docs.nvidia.com/nim/large-language-models/latest/api-reference.html

Set environment variables in Windows PowerShell:

```powershell
setx NVIDIA_API_KEY "PASTE_YOUR_NVIDIA_API_KEY_HERE"
setx OPENAI_API_KEY "PASTE_YOUR_NVIDIA_API_KEY_HERE"
setx OPENAI_API_BASE "https://integrate.api.nvidia.com/v1"
```

After using `setx`, close and reopen the terminal.

Do **not** put your real API key inside source code or GitHub.

---

## 3. First tool to install: Aider

Aider is the simplest first choice. It can read your project, edit files, use Git, and help with coding tasks.

Install it:

```powershell
python -m pip install aider-install
aider-install
```

Create a workspace:

```powershell
mkdir C:\AI_WORKSPACE
mkdir C:\AI_WORKSPACE\crm_program
mkdir C:\AI_WORKSPACE\test_agent
```

Go to a project folder:

```powershell
cd C:\AI_WORKSPACE\test_agent
```

Run Aider using an OpenAI-compatible model name:

```powershell
aider --model openai/YOUR_NVIDIA_MODEL_ID
```

Example only:

```powershell
aider --model openai/qwen/qwen3-coder-480b-a35b-instruct
```

The exact model ID may change, so copy it from NVIDIA Build instead of relying on old notes.

Aider OpenAI-compatible docs:

https://aider.chat/docs/llms/openai-compat.html

---

## 4. Second tool: Cline or Roo Code in VS Code

Install one of these VS Code extensions:

```text
Cline
Roo Code
```

For Cline, use:

```text
API Provider: OpenAI Compatible
Base URL: https://integrate.api.nvidia.com/v1
API Key: Your NVIDIA API key
Model ID: The model ID copied from NVIDIA Build
```

Cline OpenAI-compatible docs:

https://docs.cline.bot/provider-config/openai-compatible

Recommended usage:

```text
Aider = best first tool for direct code editing
Cline / Roo Code = good when you want to watch and approve changes inside VS Code
```

---

## 5. Third tool: OpenHands

OpenHands is closer to a Devin / Codex-style autonomous software agent. It can run in a browser UI and use Docker sandboxing.

Install inside Ubuntu / WSL:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install openhands --python 3.12
openhands serve
```

Open browser:

```text
http://localhost:3000
```

OpenHands local setup docs:

https://docs.openhands.dev/openhands/usage/run-openhands/local-setup

OpenHands LLM setup idea:

```text
Settings / LLM
Provider: OpenAI or OpenAI Compatible / Advanced
Custom Model: openai/YOUR_NVIDIA_MODEL_ID
Base URL: https://integrate.api.nvidia.com/v1
API Key: Your NVIDIA API key
```

OpenHands LLM docs:

https://docs.openhands.dev/openhands/usage/llms/openai-llms

---

## 6. Should you install n8n now?

Not first.

n8n is not a Codex replacement. It is better for workflow automation, such as:

```text
Daily CRM data enrichment
Company research workflow
Calling NVIDIA API for summaries
Writing results into a database
Creating Gmail drafts
Follow-up reminders
```

For code modification, start with:

```text
Aider -> Cline / Roo Code -> OpenHands
```

Only add n8n later when your coding-agent setup is already stable.

---

## 7. Recommended install order after formatting Windows

Use this order:

```text
1. Windows Update
2. NVIDIA / AMD / Intel drivers
3. PowerShell 7
4. Git
5. VS Code
6. Python 3.12
7. Node.js LTS
8. WSL2 Ubuntu
9. Docker Desktop
10. Aider
11. Cline or Roo Code
12. OpenHands
```

Recommended folder structure:

```text
C:\AI_WORKSPACE\crm_program
C:\AI_WORKSPACE\test_agent
```

Use `test_agent` first. Do not test new agents directly on your real CRM program.

---

## 8. Safety rules

Do not immediately let an agent control your whole computer.

Use these rules:

```text
Only allow the agent to work inside the project folder.
Make a Git commit before big changes.
Never put API keys into source code.
Do not let the agent automatically send emails.
Do not let the agent automatically delete files.
Do not give the agent access to Gmail, banking, or personal documents unless clearly needed.
```

Best first test:

```text
Use Aider + NVIDIA API.
Ask it to modify one small Python script.
Check whether it can read the project, edit the file, and run a test.
Only after that, try Cline or OpenHands.
```

---

## Practical conclusion

This setup is not exactly the same as OpenAI Codex, because Codex has its own model, sandbox, tooling, and review flow.

But for CRM scripts, data enrichment, Python automation, and project cleanup, this setup is practical enough to start.

Start simple. Make Aider work first. Then add Cline / Roo Code. Then try OpenHands.