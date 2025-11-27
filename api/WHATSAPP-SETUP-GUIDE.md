# WhatsApp Automated Notification Setup Guide

This guide will help you set up automated WhatsApp notifications for your Thalir Manam website.

## Current Status

- ✅ WhatsApp integration code is ready
- ⏳ **You need to configure your WhatsApp API** (5-10 minutes)
- ✅ Multiple provider options available

---

## Recommended Setup: CallMeBot (FREE & EASY)

**Best for**: Small to medium businesses, easy setup, completely free

### Step-by-Step Setup

#### Step 1: Save CallMeBot Contact
1. Open WhatsApp on your phone
2. **Save this number as a contact**: `+34 644 28 95 07`
   - Name it "CallMeBot API" or similar

#### Step 2: Request API Key
1. Open WhatsApp chat with CallMeBot (+34 644 28 95 07)
2. **Send exactly this message**:
   ```
   I allow callmebot to send me messages
   ```
3. Wait 1-2 minutes for automated reply
4. You'll receive a message with your **API Key** (example: `123456`)

#### Step 3: Configure API Key
1. Open the file: `/var/www/html/thalirmanam/api/whatsapp-config.php`
2. Find this line:
   ```php
   define('WHATSAPP_API_KEY', '');
   ```
3. Add your API key:
   ```php
   define('WHATSAPP_API_KEY', '123456');  // Replace with your actual API key
   ```
4. Save the file

#### Step 4: Verify Your Phone Number
Make sure this line has your correct WhatsApp number:
```php
define('WHATSAPP_PHONE', '917200385635');  // Already configured
```

#### Step 5: Test It!
Run the test script:
```bash
cd /var/www/html/thalirmanam/api
php test-whatsapp.php
```

You should receive a WhatsApp message within seconds!

---

## Alternative Option 1: Twilio WhatsApp API (PROFESSIONAL)

**Best for**: Businesses needing reliable service with support

### Advantages
- ✅ Professional service with 99.9% uptime
- ✅ Official WhatsApp Business API partner
- ✅ Rich media support (images, documents)
- ✅ Better deliverability
- ✅ Technical support available

### Pricing
- Free trial credit ($15)
- After trial: ~$0.005 per message
- Example: 1000 messages = $5

### Setup Steps

1. **Sign up for Twilio**
   - Go to: https://www.twilio.com/try-twilio
   - Sign up with your email
   - Verify your phone number

2. **Get WhatsApp Sandbox Access**
   - Log in to Twilio Console
   - Go to: Messaging → Try it out → Send a WhatsApp message
   - Follow instructions to activate sandbox
   - Join the sandbox from your WhatsApp: +1 415 523 8886
   - Send the code they provide

3. **Get Your Credentials**
   - From Twilio Console home page:
     - Copy your **Account SID**
     - Copy your **Auth Token**
   - From WhatsApp sandbox:
     - Note the sandbox number (e.g., `whatsapp:+14155238886`)

4. **Configure in whatsapp-config.php**
   ```php
   define('WHATSAPP_PROVIDER', 'twilio');  // Change from 'callmebot'

   define('TWILIO_ACCOUNT_SID', 'ACxxxxxxxxxxxxxxxxxxxxxxxx');
   define('TWILIO_AUTH_TOKEN', 'your_auth_token_here');
   define('TWILIO_WHATSAPP_FROM', 'whatsapp:+14155238886');
   define('TWILIO_WHATSAPP_TO', 'whatsapp:+917200385635');
   ```

5. **Test**
   ```bash
   php test-whatsapp.php
   ```

---

## Alternative Option 2: WhatsApp Business API (ENTERPRISE)

**Best for**: Large businesses with high volume

### Features
- ✅ Official WhatsApp Business account
- ✅ Your own business name and profile
- ✅ Verified green checkmark
- ✅ Unlimited messages
- ✅ Rich media and templates

### Requirements
- Business verification required
- Facebook Business Manager account
- Meta approval process (1-2 weeks)

### Setup
1. Apply at: https://business.whatsapp.com/
2. Complete business verification
3. Get approved by Meta
4. Configure webhook and access token
5. Update `whatsapp-config.php` with credentials

---

## Quick Comparison

| Feature | CallMeBot | Twilio | WhatsApp Business |
|---------|-----------|--------|-------------------|
| **Setup Time** | 5 minutes | 15 minutes | 1-2 weeks |
| **Cost** | FREE | ~$0.005/msg | Custom pricing |
| **Reliability** | Good | Excellent | Excellent |
| **Support** | None | Email/Phone | Dedicated |
| **Best For** | Getting started | Small-Medium biz | Enterprise |
| **Rich Media** | ❌ | ✅ | ✅ |
| **Own Number** | ❌ | ✅ (sandbox) | ✅ |

---

## Testing Your Setup

### Test Script
```bash
cd /var/www/html/thalirmanam/api
php test-whatsapp.php
```

### What to Expect
- ✅ Script will send test WhatsApp messages
- ✅ You'll receive them on +91 7200385635
- ✅ Log output will show success/failure

### Test Output Examples

**Success (CallMeBot)**:
```
✅ WhatsApp sent successfully via CallMeBot to: 917200385635
Message: Test notification from Thalir Manam
```

**Success (Twilio)**:
```
✅ WhatsApp sent successfully via Twilio
Message delivered to: whatsapp:+917200385635
```

**Not Configured Yet**:
```
📱 WhatsApp not configured - notification skipped
Please configure WHATSAPP_API_KEY in whatsapp-config.php
```

---

## Troubleshooting

### CallMeBot Issues

**Problem: Not receiving messages**
- ✅ Check you sent the authorization message correctly
- ✅ Verify API key is correct (no extra spaces)
- ✅ Make sure phone number format is correct: `917200385635`
- ✅ Check you're sending to the same number you authorized

**Problem: "Invalid API key" error**
- Request a new API key by sending the authorization message again
- Make sure you copied the full API key from the response

**Problem: Rate limit exceeded**
- CallMeBot has limits on free tier
- Wait a few minutes between messages
- Consider upgrading to Twilio for higher volume

### Twilio Issues

**Problem: Authentication error**
- Double-check Account SID and Auth Token
- Ensure no extra spaces when copying

**Problem: Sandbox not working**
- Re-join the sandbox by texting the code again
- Make sure "whatsapp:" prefix is included in numbers

**Problem: Messages not delivered**
- Check Twilio logs in console for detailed error
- Verify destination number is correct format

### General Issues

**Check Configuration**:
```bash
php -r "require 'whatsapp-config.php'; print_r(getWhatsAppConfig());"
```

**Check Logs**:
```bash
tail -f /var/log/apache2/error.log | grep -i whatsapp
```

---

## Current Implementation Status

### What's Working
- ✅ Email notifications (fully configured with SMTP)
- ✅ Database storage of form submissions
- ✅ WhatsApp integration code (ready to use)

### What Needs Configuration
- ⏳ WhatsApp API key (follow steps above)

### Once Configured
When someone submits a form:
1. ✅ Data saved to database
2. ✅ Email sent to Thalirmanam5@gmail.com
3. ✅ **WhatsApp sent to +91 7200385635** (once configured)
4. ✅ User sees success message

---

## My Recommendation

**For immediate setup**: Use CallMeBot
- Free and works in 5 minutes
- Good enough for most small businesses
- Easy to test and validate

**For production/long-term**: Upgrade to Twilio
- More reliable
- Professional service
- Worth the small cost (~$5 for 1000 messages)
- Better support

---

## Need Help?

### Resources
- CallMeBot: https://www.callmebot.com/blog/free-api-whatsapp-messages/
- Twilio WhatsApp: https://www.twilio.com/docs/whatsapp
- WhatsApp Business: https://business.whatsapp.com/

### Test Files
- Configuration: `/api/whatsapp-config.php`
- Test script: `/api/test-whatsapp.php`
- Implementation: `/api/notification-helper-smtp.php`

---

## Next Steps

1. ✅ Choose your provider (recommended: CallMeBot for now)
2. ✅ Follow the setup steps above
3. ✅ Configure API key in `whatsapp-config.php`
4. ✅ Run test: `php test-whatsapp.php`
5. ✅ Submit a test form on your website
6. ✅ Verify you receive both email AND WhatsApp

**You're almost there! Just need to add the API key and you're done!**
