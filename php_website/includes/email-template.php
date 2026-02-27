<?php
/**
 * Beautiful HTML email template for Aussie App Studio.
 * Returns HTML for lead notifications and test emails. Use inline CSS for email client support.
 *
 * @param string $type 'lead' | 'test'
 * @param array $data For 'lead': name, email, phone?, company?, message, createdAt. For 'test': message.
 * @return string HTML
 */
if (!function_exists('get_email_template_html')) {
function get_email_template_html($type, $data = []) {
  $brandNavy = '#0F172A';
  $brandCyan = '#06B6D4';
  $brandCyanLight = '#22D3EE';
  $slate800 = '#1e293b';
  $slate600 = '#475569';
  $slate400 = '#94A3B8';
  $slate200 = '#E2E8F0';
  $slate100 = '#F1F5F9';
  $white = '#ffffff';

  if ($type === 'test') {
    $message = isset($data['message']) ? $data['message'] : 'If you received this, SMTP is configured correctly and new lead notifications will be sent to this address.';
    $html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Test email</title></head><body style="margin:0;padding:0;font-family:\'Segoe UI\',Tahoma,Geneva,Verdana,sans-serif;background-color:#f8fafc;color:#334155;">';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f8fafc;"><tr><td align="center" style="padding:40px 20px;">';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);background-color:' . $white . ';">';
    $html .= '<tr><td style="background:linear-gradient(135deg,' . $brandNavy . ' 0%,' . $slate800 . ' 100%);padding:28px 32px;text-align:center;"><span style="font-size:22px;font-weight:700;color:' . $white . ';letter-spacing:-0.02em;">Aussie App Studio</span><p style="margin:8px 0 0;font-size:14px;color:' . $brandCyanLight . ';font-weight:500;">Test email</p></td></tr>';
    $html .= '<tr><td style="padding:32px 32px 28px;"><p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:' . $slate800 . ';">' . htmlspecialchars($message) . '</p>';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top:24px;border-radius:12px;background-color:' . $slate100 . ';border:1px solid ' . $slate200 . ';"><tr><td style="padding:16px 20px;"><p style="margin:0;font-size:13px;color:' . $slate600 . ';">✓ SMTP connection is working</p></td></tr></table>';
    $html .= '</td></tr><tr><td style="padding:20px 32px 28px;border-top:1px solid ' . $slate200 . ';"><p style="margin:0;font-size:12px;color:' . $slate400 . ';">This is an automated message from your website admin panel.</p></td></tr></table></td></tr></table></body></html>';
    return $html;
  }

  if ($type === 'lead') {
    $name = isset($data['name']) ? $data['name'] : '';
    $email = isset($data['email']) ? $data['email'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : null;
    $company = isset($data['company']) ? $data['company'] : null;
    $message = isset($data['message']) ? $data['message'] : '';
    $createdAt = isset($data['createdAt']) ? $data['createdAt'] : date('c');
    $dateFormatted = date('F j, Y \a\t g:i A', strtotime($createdAt));

    $html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New enquiry</title></head><body style="margin:0;padding:0;font-family:\'Segoe UI\',Tahoma,Geneva,Verdana,sans-serif;background-color:#f8fafc;color:#334155;">';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f8fafc;"><tr><td align="center" style="padding:40px 20px;">';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;margin:0 auto;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);background-color:' . $white . ';">';

    // Header
    $html .= '<tr><td style="background:linear-gradient(135deg,' . $brandNavy . ' 0%,' . $slate800 . ' 100%);padding:28px 32px;text-align:center;">';
    $html .= '<span style="font-size:22px;font-weight:700;color:' . $white . ';letter-spacing:-0.02em;">Aussie App Studio</span>';
    $html .= '<p style="margin:10px 0 0;font-size:14px;color:' . $brandCyanLight . ';font-weight:500;">New website enquiry</p>';
    $html .= '<div style="display:inline-block;margin-top:14px;padding:6px 14px;background-color:rgba(6,182,212,0.2);border-radius:999px;"><span style="font-size:12px;font-weight:600;color:' . $brandCyanLight . ';">' . htmlspecialchars($dateFormatted) . '</span></div>';
    $html .= '</td></tr>';

    // Contact details card
    $html .= '<tr><td style="padding:28px 32px 24px;">';
    $html .= '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-radius:12px;background-color:' . $slate100 . ';border:1px solid ' . $slate200 . ';">';
    $html .= '<tr><td style="padding:20px 24px;"><p style="margin:0 0 16px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:' . $slate600 . ';">Contact details</p>';
    $html .= '<p style="margin:0 0 8px;font-size:16px;font-weight:600;color:' . $brandNavy . ';">' . htmlspecialchars($name) . '</p>';
    $html .= '<p style="margin:0 0 4px;font-size:15px;"><a href="mailto:' . htmlspecialchars($email) . '" style="color:' . $brandCyan . ';text-decoration:none;">' . htmlspecialchars($email) . '</a></p>';
    if ($phone) {
      $html .= '<p style="margin:8px 0 0;font-size:14px;color:' . $slate600 . ';">📞 ' . htmlspecialchars($phone) . '</p>';
    }
    if ($company) {
      $html .= '<p style="margin:4px 0 0;font-size:14px;color:' . $slate600 . ';">🏢 ' . htmlspecialchars($company) . '</p>';
    }
    $html .= '</td></tr></table>';

    // Message
    $html .= '<p style="margin:24px 0 0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:' . $slate600 . ';">Message</p>';
    $html .= '<div style="margin-top:12px;padding:20px 24px;border-radius:12px;background-color:' . $white . ';border:1px solid ' . $slate200 . ';"><p style="margin:0;font-size:15px;line-height:1.65;color:' . $slate800 . ';white-space:pre-wrap;">' . nl2br(htmlspecialchars($message)) . '</p></div>';
    $html .= '</td></tr>';

    // Footer
    $html .= '<tr><td style="padding:20px 32px 28px;border-top:1px solid ' . $slate200 . ';background-color:' . $slate100 . ';">';
    $html .= '<p style="margin:0;font-size:12px;color:' . $slate400 . ';">Reply directly to this email to respond to ' . htmlspecialchars($name) . '.</p>';
    $html .= '<p style="margin:8px 0 0;font-size:11px;color:' . $slate400 . ';">Aussie App Studio · Website contact form</p></td></tr>';
    $html .= '</table></td></tr></table></body></html>';

    return $html;
  }

  return '';
}
}
