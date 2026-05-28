export const staffAppConfig = {
  // Channel where the "Apply for Staff" button is posted
  applyChannelId: process.env.STAFF_APPLY_CHANNEL_ID || "YOUR_APPLY_CHANNEL_ID",
 
  // Staff-only channel where completed applications are sent
  staffChannelId: process.env.STAFF_REVIEW_CHANNEL_ID || "YOUR_STAFF_CHANNEL_ID",
 
  // Cooldown in milliseconds before a user can re-apply (24 hours)
  cooldownMs: 24 * 60 * 60 * 1000,
 
  // Questions asked step-by-step in DMs
  questions: [
    "What is your age?",
    "What is your timezone?",
    "Why do you want to be a staff member?",
    "How many hours per week can you be active?",
    "Do you have any prior moderation experience? If yes, please describe.",
  ],
 
  // Timeout per question in milliseconds (2 minutes)
  questionTimeoutMs: 2 * 60 * 1000,
 
  // Embed colors
  colors: {
    apply: 0x5865f2,    // Blurple
    pending: 0xfee75c,  // Yellow
    accepted: 0x57f287, // Green
    denied: 0xed4245,   // Red
  },
};
