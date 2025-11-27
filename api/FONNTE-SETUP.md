# Fonnte WhatsApp Setup Guide - Complete Tutorial

## Why Fonnte is Perfect for Your Business

✅ **Messages from YOUR number** - Customers see +91 7200385635, not a random number
✅ **Based in Indonesia** - Great service for India region
✅ **Affordable pricing** - Much cheaper than international providers
✅ **Easy setup** - 5-10 minutes to get started
✅ **Rich features** - Images, documents, buttons, templates
✅ **Reliable delivery** - Good uptime and support

---

## Quick Setup (5-10 Minutes)

### Step 1: Create Fonnte Account (2 minutes)

1. **Go to** https://fonnte.com/
2. **Click "Daftar" (Register)** or "Sign Up"
3. **Fill in your details:**
   - Name
   - Email
   - Password
4. **Verify your email** (check inbox/spam)
5. **Login** to your account

---

### Step 2: Create Device (3 minutes)

1. **After login**, you'll see the dashboard
2. **Click "Device"** in the menu
3. **Click "Tambah Device" (Add Device)** or "Create New Device"
4. **Enter device name:** `Thalir Manam Website`
5. **Click Save/Create**

---

### Step 3: Connect Your WhatsApp (2 minutes)

1. **You'll see a QR code** on screen
2. **Open WhatsApp** on your phone (+91 7200385635)
3. **Tap the three dots** (⋮) in top right
4. **Select "Linked Devices"**
5. **Tap "Link a Device"**
6. **Scan the QR code** from Fonnte website
7. **Wait for connection** (5-10 seconds)
8. ✅ **You're connected!** Your WhatsApp is now linked to Fonnte

---

### Step 4: Get Your API Token (1 minute)

1. **In Fonnte dashboard**, click **"Setting"** or **"API"**
2. **Copy your API Token** (long string like: `abc123xyz...`)
   - It looks like: `abc1234567890defghijklmnopqrstuvwxyz`
3. **Keep it safe** - you'll need this next

---

### Step 5: Configure Your Website (2 minutes)

**Option A: Automatic (Easiest)**
```bash
cd /var/www/html/thalirmanam/api
nano whatsapp-config.php
```

Find this line:
```php
define('FONNTE_API_TOKEN', '');
```

Change to (paste your token):
```php
define('FONNTE_API_TOKEN', 'your-token-from-fonnte-dashboard');
```

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

**Verify the number is correct:**
```php
define('FONNTE_TARGET', '917200385635');  // Should be correct
```

---

### Step 6: Test It! (1 minute)

```bash
cd /var/www/html/thalirmanam/api
php test-whatsapp.php
```

**Expected result:**
- You'll receive **3 WhatsApp messages** on +91 7200385635
- Messages will come **from your own number** (not a random number!)
- You'll see success messages in the terminal

**Example output:**
```
✅ WhatsApp sent successfully via Fonnte to: 917200385635
Message: Test notification from Thalir Manam
```

---

## What You'll Receive

### Test Messages
When you run the test script, you'll get 3 messages:

**Message 1: Simple Test**
```
🧪 TEST MESSAGE

This is a test WhatsApp notification from Thalir Manam website.

If you receive this, your WhatsApp integration is working perfectly! ✅
```

**Message 2: Contact Form Format**
```
🆕 NEW CONTACT FORM SUBMISSION
━━━━━━━━━━━━━━━━━━━━

👤 Name: Test User
📧 Email: testuser@example.com
📱 Phone: 9876543210
📋 Subject: WhatsApp Test - Contact Form

💬 Message:
This is a test contact form submission...

━━━━━━━━━━━━━━━━━━━━
⏰ 13 Nov 2025, 03:45 PM
🌐 Thalir Manam Website
```

**Message 3: Appointment Format**
```
📅 NEW APPOINTMENT REQUEST
━━━━━━━━━━━━━━━━━━━━

⏰ Date & Time:
📆 20 Nov 2025
🕐 Morning (9 AM - 12 PM)

👨‍👩‍👧 Parent: Test Parent
👶 Child: Test Child (5 yrs)
📧 Email: testparent@example.com
📱 Phone: 9876543210
🏥 Service: Speech Therapy

⚠️ Please contact to confirm appointment
```

---

## Fonnte Dashboard

### Access Your Dashboard
**URL:** https://fonnte.com/dashboard

### What You Can See:
1. **Message History** - All messages sent
2. **Device Status** - Connected/disconnected
3. **API Usage** - How many messages used
4. **Credits/Balance** - Your remaining credits
5. **Statistics** - Delivery rates, success/failure

### Important Features:
- **Message Logs** - Track every message sent
- **Device Management** - Reconnect if needed
- **API Settings** - Get/regenerate token
- **Top Up** - Add credits when needed

---

## Pricing

### Free Trial
- Usually get some free credits to start
- Great for testing

### Pay-As-You-Go
- ~IDR 350-500 per message (~$0.02-0.03 USD)
- Much cheaper than international providers!
- No monthly fees
- Only pay for messages sent

### Example Costs (approximate):
- 100 messages ≈ IDR 35,000-50,000 (~$2-3 USD)
- 1,000 messages ≈ IDR 350,000-500,000 (~$20-30 USD)
- Much more affordable than Twilio for India!

### Top Up Methods:
- Bank transfer (Indonesian banks)
- E-wallet (GoPay, OVO, Dana)
- Credit card (some options)
- Contact support for India payment options

---

## Troubleshooting

### Problem: "Device not connected"

**Solution:**
1. Go to Fonnte dashboard
2. Click "Device"
3. You'll see your device status
4. If disconnected, scan QR code again
5. Make sure WhatsApp is still linked:
   - Open WhatsApp → Settings → Linked Devices
   - You should see "Fonnte" device

### Problem: "Invalid token"

**Solution:**
1. Go to https://fonnte.com/dashboard
2. Click "Setting" or "API"
3. Copy the token again (make sure full token)
4. Update in whatsapp-config.php
5. No spaces before/after the token

### Problem: "Target number not found"

**Solution:**
1. Check the number format: `917200385635`
2. Should have country code (91 for India)
3. No + or spaces
4. No leading zeros after country code

### Problem: Messages not delivered

**Check:**
1. **Device connected?** Go to Fonnte dashboard
2. **WhatsApp still linked?** Check WhatsApp → Linked Devices
3. **Credits available?** Check dashboard balance
4. **Number correct?** Verify in config file
5. **API token valid?** Try regenerating

### Problem: "Insufficient balance"

**Solution:**
1. Go to Fonnte dashboard
2. Click "Top Up" or "Isi Saldo"
3. Choose payment method
4. Add credits
5. Wait for confirmation (usually instant)

---

## Advanced Features

### Send Images
```php
$data = [
    'target' => '917200385635',
    'message' => 'Check out this image!',
    'url' => 'https://yoursite.com/image.jpg'
];
```

### Send Documents
```php
$data = [
    'target' => '917200385635',
    'message' => 'Here is your receipt',
    'url' => 'https://yoursite.com/receipt.pdf',
    'filename' => 'receipt.pdf'
];
```

### Send Location
```php
$data = [
    'target' => '917200385635',
    'message' => 'Our location',
    'location' => '28.6139,77.2090'  // latitude,longitude
];
```

### Add Delay (Random Timing)
```php
$data = [
    'target' => '917200385635',
    'message' => 'Hello!',
    'delay' => '1-5'  // Random 1-5 seconds delay
];
```

---

## Maintenance

### Daily:
- Check Fonnte dashboard for message delivery
- Monitor balance/credits
- Verify device still connected

### Weekly:
- Review message statistics
- Check for failed deliveries
- Top up credits if needed

### Monthly:
- Analyze message volumes
- Optimize message templates
- Review costs vs. benefits

---

## Security Best Practices

### Protect Your API Token:
✅ **Never share** your Fonnte API token
✅ **Don't commit** to git repositories
✅ **Regenerate** if compromised
✅ **Use environment variables** in production

### Keep Device Secure:
✅ **Only link** authorized devices
✅ **Check** Linked Devices in WhatsApp regularly
✅ **Disconnect** if you see unknown devices
✅ **Use strong password** for Fonnte account

---

## Comparison: Fonnte vs Others

| Feature | Fonnte | CallMeBot | Twilio |
|---------|--------|-----------|--------|
| **From Your Number** | ✅ YES | ❌ No | ✅ Yes (sandbox) |
| **Setup Time** | 10 min | 5 min | 15 min |
| **Cost** | ~$0.02/msg | FREE | ~$0.005/msg |
| **Best For** | India/SEA | Testing | Global/Enterprise |
| **Rich Media** | ✅ Yes | ❌ No | ✅ Yes |
| **Reliability** | Excellent | Good | Excellent |
| **Support** | Email/WA | None | Phone/Email |
| **Region** | Indonesia | Europe | Global |

**Verdict:** Fonnte is the **best choice** for your India-based business!

---

## Getting Help

### Fonnte Support:
- **Website:** https://fonnte.com/
- **Documentation:** https://docs.fonnte.com/
- **Email:** support@fonnte.com
- **WhatsApp:** Check their website for support number

### Your Setup:
- **Config file:** `/var/www/html/thalirmanam/api/whatsapp-config.php`
- **Test script:** `/var/www/html/thalirmanam/api/test-whatsapp.php`
- **Logs:** `tail -f /var/log/apache2/error.log | grep WhatsApp`

---

## Quick Commands Reference

```bash
# Edit configuration
nano /var/www/html/thalirmanam/api/whatsapp-config.php

# Test WhatsApp
cd /var/www/html/thalirmanam/api && php test-whatsapp.php

# Check configuration
php -r "require 'whatsapp-config.php'; print_r(getWhatsAppConfig());"

# Monitor logs
tail -f /var/log/apache2/error.log | grep WhatsApp

# Check Fonnte device status
# Go to: https://fonnte.com/dashboard
```

---

## Next Steps After Setup

### Immediate (Today):
1. ✅ Complete setup (above steps)
2. ✅ Run test script
3. ✅ Verify 3 messages received
4. ✅ Check messages come from YOUR number

### This Week:
1. ✅ Test contact form on website
2. ✅ Test appointment booking
3. ✅ Monitor message delivery
4. ✅ Top up credits if needed

### Long-term:
1. Set up message templates
2. Monitor monthly costs
3. Optimize message content
4. Track response rates
5. Consider auto-replies

---

## Success Checklist

Before you finish, verify:

- [ ] Fonnte account created
- [ ] Device created and named
- [ ] WhatsApp scanned and connected
- [ ] API token copied
- [ ] Token added to whatsapp-config.php
- [ ] Target number verified (917200385635)
- [ ] Test script runs successfully
- [ ] 3 test messages received
- [ ] Messages come from YOUR number (+91 7200385635)
- [ ] Dashboard accessible at https://fonnte.com/dashboard
- [ ] Credits/balance checked

**All checked? Congratulations! You're all set! 🎉**

---

## Summary

**Time to complete:** 10 minutes
**Cost:** ~$0.02 per message (affordable!)
**Difficulty:** Easy (just scan QR code)
**Benefit:** Professional WhatsApp automation from YOUR number!

**Your customers will see messages from +91 7200385635 - they'll know it's you!**

Need help? Check the troubleshooting section or contact Fonnte support.
