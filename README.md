# playwright-framework-typescript
Robust framework developed for any complex web applications

playwright-automation-framework/
├── tests/
│   ├── api/
│   │   └── transaction.spec.ts      # API validation tests
│   └── ui/
│       └── checkout.spec.ts         # Payment success tests
├── pages/
│   ├── CheckoutPage.ts              # UI locators for checkout
│   └── PaymentIframe.ts             # Locators inside the Stripe/Razorpay iframe
├── fixtures/
│   ├── apiFixture.ts                # API request context setup
│   └── uiFixture.ts                 # Page Object injection
├── utils/
│   ├── uiHelpers.ts                 # Common UI methods like (Click, waitForLoadState)
│   ├── apiHelpers.ts                # Common API request methods (Returning token)
│   └── authSetup.ts                 # Global login logic (Generating common credentials)
├── resource/
│   └── checkoutPaymentlocators.json # contains all locators in json file
│    
├── .auth/
│   └── user.json                    # Saved authentication state
└── playwright.config.ts             # Global configuration
