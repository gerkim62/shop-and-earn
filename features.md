const routes = [
  // Main pages
  { path: '/', component: 'LandingPage' },
  { path: '/about', component: 'AboutPage' },
  { path: '/products', component: 'ProductCatalog' },
  { path: '/cart', component: 'CartPage' },
  { path: '/checkout', component: 'CheckoutPage' },

  // User account and referrals
  { path: '/account', component: 'UserProfile' },
  { path: '/account/referrals', component: 'ReferralsPage' },
  { path: '/account/rewards', component: 'RewardsTracker' },
  { path: '/account/wishlist', component: 'Wishlist' },
  { path: '/account/purchase-history', component: 'PurchaseHistory' },
  { path: '/account/payment-methods', component: 'PaymentMethods' },

  // Product related
  { path: '/products/:id', component: 'ProductDetails' },
  { path: '/products/:id/reviews', component: 'ProductReviews' },

  // Special features
  { path: '/flash-sales', component: 'FlashSales' },
  { path: '/leaderboard', component: 'Leaderboard' },
  { path: '/loyalty-program', component: 'LoyaltyProgram' },

  // Support and information
  { path: '/faq', component: 'FAQPage' },
  { path: '/help', component: 'HelpCenter' },
  { path: '/contact', component: 'ContactPage' },
  { path: '/blog', component: 'BlogPage' },
  { path: '/blog/:id', component: 'BlogPost' },

  // Legal and policy
  { path: '/terms', component: 'TermsOfService' },
  { path: '/privacy', component: 'PrivacyPolicy' },

  // Authentication
  { path: '/login', component: 'LoginPage' },
  { path: '/register', component: 'RegisterPage' },
  { path: '/forgot-password', component: 'ForgotPassword' },

  // Notifications
  { path: '/notifications', component: 'NotificationsCenter' },

  // Referral tools
  { path: '/refer', component: 'ReferralLinkGenerator' },

  // Error pages
  { path: '/404', component: 'NotFoundPage' },
  { path: '*', redirect: '/404' }
]

export default routes;const routes = [
  // Main pages
  { path: '/', component: 'LandingPage' },
  { path: '/about', component: 'AboutPage' },
  { path: '/products', component: 'ProductCatalog' },
  { path: '/cart', component: 'CartPage' },
  { path: '/checkout', component: 'CheckoutPage' },

  // User account and referrals
  { path: '/account', component: 'UserProfile' },
  { path: '/account/referrals', component: 'ReferralsPage' },
  { path: '/account/rewards', component: 'RewardsTracker' },
  { path: '/account/wishlist', component: 'Wishlist' },
  { path: '/account/purchase-history', component: 'PurchaseHistory' },
  { path: '/account/payment-methods', component: 'PaymentMethods' },

  // Product related
  { path: '/products/:id', component: 'ProductDetails' },
  { path: '/products/:id/reviews', component: 'ProductReviews' },

  // Special features
  { path: '/flash-sales', component: 'FlashSales' },
  { path: '/leaderboard', component: 'Leaderboard' },
  { path: '/loyalty-program', component: 'LoyaltyProgram' },

  // Support and information
  { path: '/faq', component: 'FAQPage' },
  { path: '/help', component: 'HelpCenter' },
  { path: '/contact', component: 'ContactPage' },
  { path: '/blog', component: 'BlogPage' },
  { path: '/blog/:id', component: 'BlogPost' },

  // Legal and policy
  { path: '/terms', component: 'TermsOfService' },
  { path: '/privacy', component: 'PrivacyPolicy' },

  // Authentication
  { path: '/login', component: 'LoginPage' },
  { path: '/register', component: 'RegisterPage' },
  { path: '/forgot-password', component: 'ForgotPassword' },

  // Notifications
  { path: '/notifications', component: 'NotificationsCenter' },

  // Referral tools
  { path: '/refer', component: 'ReferralLinkGenerator' },

  // Error pages
  { path: '/404', component: 'NotFoundPage' },
  { path: '*', redirect: '/404' }
]


That's an interesting app concept combining referral rewards, e-commerce, and discounts. Here are some additional pages and features the app could have:

1. Product Catalog: A page or section where users can browse all available products, filter by category, price range, etc.

2. User Profile: Where users can manage their account details, view purchase history, and track their referral progress.

3. Leaderboard: A page showcasing top referrers, potentially offering additional rewards or recognition for top performers.

4. Notifications Center: To inform users about new products, special offers, successful referrals, or when they've earned rewards.

5. Rewards Tracker: A dedicated page or dashboard where users can see a detailed breakdown of their earned rewards, pending rewards, and redemption history.

6. FAQ/Help Center: To answer common questions about the referral program, purchasing process, and general app usage.

7. Product Reviews: Allow users to leave reviews for products they've purchased, building trust and community.

8. Wishlist: Let users save products they're interested in for future purchase.

9. Social Sharing: Easy-to-use tools for sharing referral links or favorite products on social media platforms.

10. Flash Sales: A page for time-limited, deeply discounted offers to create urgency and drive sales.

11. Loyalty Program: In addition to referrals, reward frequent purchasers with points or exclusive discounts.

12. Educational Content: Blog posts or videos about smart shopping, maximizing referral earnings, or product use guides.

13. In-app Chat Support: For real-time customer service.

14. Referral Link Generator: A tool to create custom referral links or codes for easy sharing.

15. Payment Methods Page: Where users can manage their payment options and see which methods are accepted.

Would you like me to elaborate on any of these features or discuss how they might be implemented?