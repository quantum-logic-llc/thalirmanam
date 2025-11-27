# CallMeBot Setup - Super Simple & FREE!

## ✅ Why CallMeBot is Great

✅ **Completely FREE** - No credit card, no account, no billing
✅ **5-minute setup** - Just one WhatsApp message
✅ **No login required** - No dashboard, no passwords
✅ **Works immediately** - Get API key in 1-2 minutes
✅ **Reliable** - Used by thousands of developers

**Perfect for getting started quickly!**

---

## 🚀 Super Simple Setup (5 Minutes)

### Step 1: Save CallMeBot Contact (1 minute)

**On your phone (+91 7200385635):**

1. Open **WhatsApp**
2. Create a **new contact**:
   - **Number:** `+34 644 28 95 07`
   - **Name:** `CallMeBot` (or any name you like)
3. **Save** the contact

---

### Step 2: Send Authorization Message (1 minute)

**Open WhatsApp chat with CallMeBot:**

1. Open chat with **+34 644 28 95 07**
2. Send **exactly this message**:
   ```
   I allow callmebot to send me messages
   ```
3. **Wait 1-2 minutes** for reply

---

### Step 3: Get Your API Key (1 minute)

**CallMeBot will reply with:**
```
You are all set! CallMeBot will now be able to send you messages!

Your API key is: 123456

To test it, go to: https://api.callmebot.com/whatsapp.php?phone=917200385635&text=test&apikey=123456
```

**Copy your API key!** (the number, example: `123456`)

---

### Step 4: Configure Your Website (2 minutes)

**Run this command:**
```bash
nano /var/www/html/thalirmanam/api/whatsapp-config.php
```

**Find this line:**
```php
define('WHATSAPP_API_KEY', '');
```

**Change to** (replace with YOUR API key):
```php
define('WHATSAPP_API_KEY', '123456');
```

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

---

### Step 5: Test It! (1 minute)

```bash
cd /var/www/html/thalirmanam/api
php test-whatsapp.php
```

**You'll receive 3 WhatsApp messages on +91 7200385635!**

---

## 📱 What You'll Receive

### Test Message Example:
```
TEST MESSAGE

This is a test WhatsApp notification from Thalir Manam website.

If you receive this, your WhatsApp integration is working perfectly! ✅
```

### Contact Form Example:
```
🆕 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━

👤 Name: Test User
📧 Email: testuser@example.com
📱 Phone: 9876543210
📋 Subject: WhatsApp Test

💬 Message:
This is a test message...

⏰ 13 Nov 2025, 05:00 PM
🌐 Thalir Manam Website
```

**Messages will come from CallMeBot** (+34 644 28 95 07), not your number.

---

## ✅ Advantages of CallMeBot

### Pros:
✅ **FREE forever** - No hidden costs
✅ **No signup** - No account creation needed
✅ **Super fast setup** - 5 minutes total
✅ **No dashboard** - Nothing to manage
✅ **Instant API key** - Get it via WhatsApp
✅ **Reliable** - Good delivery rates

### Limitations:
⚠️ Messages come from CallMeBot number (not yours)
⚠️ May have rate limits (usually fine for most businesses)
⚠️ Basic text only (no images/files)

**For most small businesses, this is perfect!**

---

## 🆘 Troubleshooting

### Not Receiving API Key Reply?

**Check:**
1. Did you save +34 644 28 95 07 as a contact first?
2. Did you send exact message: `I allow callmebot to send me messages`
3. Wait 2-3 minutes (can be slow sometimes)
4. Check spam/blocked messages

**If still nothing:**
1. Delete the contact
2. Save again: +34 644 28 95 07
3. Send the message again
4. Wait 5 minutes

### Got API Key but Messages Not Working?

**Check:**
1. API key is correct in whatsapp-config.php
2. No extra spaces before/after API key
3. Phone number is correct: 917200385635
4. Run test: `php test-whatsapp.php`

### Messages Not Delivered?

**Possible reasons:**
1. Rate limit reached (wait 1 hour, try again)
2. CallMeBot service issue (rare, check https://www.callmebot.com/)
3. Phone number format wrong

**Fix:**
1. Wait a few minutes
2. Test with single message first
3. Check error logs: `tail -f /var/log/apache2/error.log | grep WhatsApp`

---

## 🔄 Alternative: Use Test URL First

**Before configuring, test if CallMeBot works:**

After you get your API key, open this URL in browser (replace with YOUR values):
```
https://api.callmebot.com/whatsapp.php?phone=917200385635&text=Hello+from+Thalir+Manam&apikey=YOUR_API_KEY
```

**Replace:**
- `YOUR_API_KEY` with the key CallMeBot sent you
- Example: `123456`

**If you receive WhatsApp message, CallMeBot is working!**

---

## 📊 Rate Limits

**CallMeBot has soft limits:**
- ~1 message per second
- ~100 messages per day (typically)
- ~1000 messages per month (typically)

**For your business:**
- 10 inquiries/day = 300 messages/month
- **Well within limits!** ✅

**If you exceed limits:**
- Messages will be queued/delayed
- Consider upgrading to paid service (Twilio)
- Or spread messages over time

---

## 🎯 Quick Commands

```bash
# Configure API key
nano /var/www/html/thalirmanam/api/whatsapp-config.php

# Test WhatsApp
cd /var/www/html/thalirmanam/api && php test-whatsapp.php

# Check configuration
php -r "require 'whatsapp-config.php'; print_r(getWhatsAppConfig());"

# Monitor logs
tail -f /var/log/apache2/error.log | grep WhatsApp
```

---

## 🔐 Security Note

**Your API key is unique to your WhatsApp number.**

✅ Keep it private (don't share publicly)
✅ If compromised, you can request a new one
⚠️ To get new key: Send "I allow callmebot to send me messages" again

---

## 💡 Pro Tips

### Tip 1: Test First
Before using on live website, test with:
```bash
php test-whatsapp.php
```

### Tip 2: Monitor Delivery
Check logs to ensure messages are being sent:
```bash
tail -f /var/log/apache2/error.log | grep "WhatsApp sent"
```

### Tip 3: Plan for Growth
If you get >100 messages/day, consider:
- Twilio (professional, $0.005/message)
- Or batch notifications (daily summary)

---

## ✨ What Happens After Setup

**Every form submission:**
1. ✅ Saved to database
2. ✅ Email sent to Thalirmanam5@gmail.com
3. ✅ **WhatsApp sent to +91 7200385635** (via CallMeBot)
4. ✅ User sees success message

**Completely automated!**

---

## 🎊 Summary

**Total Time:** 5 minutes
**Total Cost:** FREE
**Difficulty:** Super Easy (just send one WhatsApp message!)

**Perfect for:**
- Small businesses
- Getting started quickly
- Testing WhatsApp notifications
- Low to medium message volume

**Upgrade later if needed:**
- Twilio (professional)
- Fonnte (your own number)
- WhatsApp Business API (enterprise)

---

## 📞 Support

**CallMeBot:**
- Website: https://www.callmebot.com/
- WhatsApp: +34 644 28 95 07
- No email support (automated service)

**Your Setup:**
- Config: `/api/whatsapp-config.php`
- Test: `php /api/test-whatsapp.php`
- This guide: `/api/CALLMEBOT-SETUP.md`

---

## ✅ Ready to Start?

**Do these 5 steps right now:**

1. ✅ Save contact: +34 644 28 95 07
2. ✅ Send message: "I allow callmebot to send me messages"
3. ✅ Wait for API key (1-2 minutes)
4. ✅ Copy API key to whatsapp-config.php
5. ✅ Test: `php test-whatsapp.php`

**Then you're done! Messages will start working immediately!** 🚀
