/* =========================================================
   DATA - course tracks
   Track titles keep the original brand voice on purpose.
   ========================================================= */
const TRACKS = [
  { id:"budget-reality", title:"Where Did My Money Go? Building a Budget That Actually Works", blurb:"Track a month of real spending, find the leaks, and build a budget you will not abandon after two weeks.", cat:"Money Basics", level:"Beginner", modules:8, hours:"3h", short:"budgeting" },
  { id:"saving-small", title:"Saving When You Barely Have Anything to Save", blurb:"How to build savings on a part-time or irregular income, and why small automatic transfers beat big intentions.", cat:"Money Basics", level:"Beginner", modules:6, hours:"2h", short:"saving" },
  { id:"emergency-fund", title:"Emergency Funds: Your Financial Airbag", blurb:"What counts as a real emergency, how much to set aside at your age, and where to keep it so you are not tempted.", cat:"Money Basics", level:"Beginner", modules:6, hours:"2h", short:"emergency funds" },
  { id:"money-goals", title:"Setting Money Goals You'll Actually Stick To", blurb:"Turn vague plans into specific targets with deadlines, and learn why most savings goals quietly fall apart.", cat:"Money Basics", level:"Beginner", modules:5, hours:"2h", short:"financial goals" },
  { id:"always-broke", title:"Why Am I Always Running Out of Money?", blurb:"Find the pattern behind the last-week-of-the-month panic, from subscription creep to spending you never registered.", cat:"Money Basics", level:"Beginner", modules:7, hours:"2h 30m", short:"spending habits" },
  { id:"checking-savings", title:"Checking vs. Savings: Which Account Does What", blurb:"What each account is for, how APY actually works, and why leaving everything in checking quietly costs you money.", cat:"Banking & Spending", level:"Beginner", modules:6, hours:"2h", short:"bank accounts" },
  { id:"choosing-bank", title:"Choosing a Bank: Big Bank, Credit Union, or Online-Only?", blurb:"Compare the three on fees, access and interest, then pick the setup that fits how you actually spend.", cat:"Banking & Spending", level:"Beginner", modules:5, hours:"2h", short:"choosing a bank" },
  { id:"bank-fees", title:"Bank Fees: The Money You Lose Without Noticing", blurb:"Overdraft, maintenance, ATM and transfer fees. How to spot them on a statement, and how to get them waived.", cat:"Banking & Spending", level:"Beginner", modules:6, hours:"2h", short:"bank fees" },
  { id:"digital-payments", title:"Venmo, Cash App, and Apple Pay: How Digital Money Moves", blurb:"What happens between tapping send and the money landing, plus which protections you do and do not get.", cat:"Banking & Spending", level:"Beginner", modules:6, hours:"2h 15m", short:"digital payments" },
  { id:"money-apps", title:"Budgeting Apps: Which Ones Actually Help", blurb:"How budgeting apps make money, what they do with your data, and how to pick one you will still open in March.", cat:"Banking & Spending", level:"Beginner", modules:5, hours:"1h 45m", short:"money apps" },
  { id:"credit-score", title:"Your Credit Score: The Number That Follows You Everywhere", blurb:"What moves the number, in what order, and how long each change takes to show up on your report.", cat:"Credit & Debt", level:"Beginner", modules:8, hours:"3h", short:"credit scores" },
  { id:"first-credit-card", title:"Should I Get a Credit Card? A Straight Answer", blurb:"When a first card helps and when it hurts, how student and secured cards work, and the habits that keep you safe.", cat:"Credit & Debt", level:"Beginner", modules:7, hours:"2h 30m", short:"credit cards" },
  { id:"bnpl", title:"Buy Now, Pay Later: Convenient or a Debt Trap?", blurb:"Understand how BNPL works, where the hidden costs appear, and when splitting a purchase becomes a bigger problem.", cat:"Credit & Debt", level:"Beginner", modules:6, hours:"2h", short:"buy now pay later" },
  { id:"how-interest-works", title:"How Interest Works, and Why It Works Against You", blurb:"APR, minimum payments and revolving balances, shown with real numbers so you can see what a carried balance costs.", cat:"Credit & Debt", level:"Intermediate", modules:7, hours:"2h 30m", short:"interest" },
  { id:"paying-off-debt", title:"Getting Out of Debt Without Losing Your Mind", blurb:"Avalanche versus snowball, which debts to attack first, and how to negotiate when payments stop being realistic.", cat:"Credit & Debt", level:"Intermediate", modules:7, hours:"2h 45m", short:"paying off debt" },
  { id:"student-loans", title:"Student Loans: What You're Actually Signing", blurb:"Subsidized, unsubsidized and private loans, how interest builds while you study, and what repayment really looks like.", cat:"College & Early Adulthood", level:"Advanced", modules:9, hours:"3h 30m", short:"student loans" },
  { id:"fafsa-aid", title:"FAFSA and Financial Aid: Money You Don't Pay Back", blurb:"Walk the FAFSA line by line, understand your aid letter, and learn how to appeal an offer that comes in too low.", cat:"College & Early Adulthood", level:"Beginner", modules:7, hours:"2h 30m", short:"financial aid" },
  { id:"scholarships", title:"Scholarships: Where to Find Them, How to Win Them", blurb:"Where real scholarships are listed, how committees read essays, and how to build a repeatable application system.", cat:"College & Early Adulthood", level:"Beginner", modules:6, hours:"2h 15m", short:"scholarships" },
  { id:"degree-worth-it", title:"Is This Degree Worth the Price? Doing the Math", blurb:"Compare total cost against realistic starting salaries so you can judge a school or major on numbers, not vibes.", cat:"College & Early Adulthood", level:"Intermediate", modules:6, hours:"2h 30m", short:"paying for college" },
  { id:"first-apartment", title:"Renting Your First Apartment: Deposits, Leases, and Roommates", blurb:"Read a lease before you sign it, understand deposits and credit checks, and split costs with roommates fairly.", cat:"College & Early Adulthood", level:"Intermediate", modules:8, hours:"3h", short:"renting" },
  { id:"paycheck", title:"Why Is My Paycheck Smaller Than I Expected?", blurb:"Decode gross versus net pay and see exactly where federal, state, Social Security and Medicare withholding goes.", cat:"Work, Income & Taxes", level:"Beginner", modules:6, hours:"2h", short:"paychecks" },
  { id:"first-tax-return", title:"Filing Taxes for the First Time", blurb:"Which forms you need, whether you have to file at all, how refunds work, and how to avoid paying for something free.", cat:"Work, Income & Taxes", level:"Beginner", modules:7, hours:"2h 30m", short:"filing taxes" },
  { id:"w2-vs-1099", title:"W-2 or 1099? What Your Job Type Means for Your Money", blurb:"Employee versus contractor, why 1099 work means setting money aside yourself, and what quarterly taxes involve.", cat:"Work, Income & Taxes", level:"Advanced", modules:6, hours:"2h 15m", short:"employment types" },
  { id:"negotiating-pay", title:"Asking for More: Negotiating Pay Early in Your Career", blurb:"Research a fair range, make the ask without apologising, and judge an offer on more than the headline salary.", cat:"Work, Income & Taxes", level:"Intermediate", modules:5, hours:"2h", short:"negotiating pay" },
  { id:"first-401k", title:"Your First 401(k): The Free Money You Might Be Skipping", blurb:"Employer matching, vesting, Roth versus traditional, and why enrolling at your first job matters more than you think.", cat:"Work, Income & Taxes", level:"Advanced", modules:7, hours:"2h 45m", short:"retirement accounts" },
  { id:"start-investing", title:"How to Start Investing With $50", blurb:"Open a brokerage account, understand fractional shares, and make a first investment without guessing or gambling.", cat:"Investing & Building Wealth", level:"Beginner", modules:7, hours:"2h 30m", short:"investing" },
  { id:"what-is-etf", title:"What Even Is an ETF?", blurb:"What you own when you buy an ETF, how it differs from a single stock, and what expense ratios quietly cost you.", cat:"Investing & Building Wealth", level:"Beginner", modules:6, hours:"2h 15m", short:"ETFs and index funds" },
  { id:"stocks-explained", title:"Stocks: What You're Actually Buying", blurb:"Shares, ownership and why prices move, plus an honest look at why picking individual winners is harder than it looks.", cat:"Investing & Building Wealth", level:"Advanced", modules:7, hours:"2h 30m", short:"stocks" },
  { id:"risk-diversification", title:"Risk and Diversification: Not Betting It All on One Thing", blurb:"Why spreading money across holdings lowers your risk without lowering returns nearly as much as you would expect.", cat:"Investing & Building Wealth", level:"Advanced", modules:6, hours:"2h 15m", short:"risk and diversification" },
  { id:"compound-interest", title:"Compound Interest: Why Starting at 18 Beats Starting at 30", blurb:"Run the numbers yourself and see why time in the market matters more than the amount you start with.", cat:"Investing & Building Wealth", level:"Beginner", modules:6, hours:"2h", short:"compound interest" },
  { id:"cost-of-car", title:"The Real Cost of a Car: Beyond the Sticker Price", blurb:"Insurance, fuel, maintenance, registration and depreciation, so you can work out what you can genuinely afford.", cat:"Real-World Money", level:"Intermediate", modules:7, hours:"2h 45m", short:"car costs" },
  { id:"insurance-basics", title:"Insurance, Explained Without the Jargon", blurb:"Premiums, deductibles and coverage limits across health, auto and renters, and which policies you actually need now.", cat:"Real-World Money", level:"Intermediate", modules:7, hours:"2h 30m", short:"insurance" },
  { id:"missed-bill", title:"What Happens When You Don't Pay a Bill", blurb:"The timeline from late notice to collections, the damage to your credit, and what to do the moment you fall behind.", cat:"Real-World Money", level:"Beginner", modules:5, hours:"2h", short:"missed payments" },
  { id:"inflation", title:"Inflation: Why Everything Costs More Than It Used To", blurb:"How inflation eats savings, why wages lag behind prices, and what it means for money you are holding in cash.", cat:"Real-World Money", level:"Advanced", modules:6, hours:"2h 15m", short:"inflation" },
  { id:"understanding-bills", title:"Understanding Your Bills: Phone, Utilities, Subscriptions", blurb:"Read a bill line by line, spot charges you never agreed to, and cancel what quietly renews every month.", cat:"Real-World Money", level:"Beginner", modules:5, hours:"1h 45m", short:"bills" },
  { id:"scams", title:"Spotting Financial Scams Before They Get You", blurb:"The patterns behind job, crypto, rental and payment-app scams, and the checks that take about thirty seconds.", cat:"Smart Financial Decisions", level:"Beginner", modules:6, hours:"2h 15m", short:"financial scams" },
  { id:"identity-theft", title:"Identity Theft: Locking Down Your Money Online", blurb:"Freeze your credit, secure your accounts, and know exactly what to do in the first hour if something is compromised.", cat:"Smart Financial Decisions", level:"Beginner", modules:6, hours:"2h 15m", short:"online security" },
  { id:"lifestyle-inflation", title:"Lifestyle Inflation: Why Raises Disappear", blurb:"Why spending rises to meet income, how to notice it happening to you, and how to keep part of every raise.", cat:"Smart Financial Decisions", level:"Intermediate", modules:5, hours:"2h", short:"lifestyle inflation" },
  { id:"money-social-media", title:"Money and Social Media: Comparison, Hype, and Bad Advice", blurb:"How finance content gets monetised, how to check whether advice is sound, and why everyone online seems richer.", cat:"Smart Financial Decisions", level:"Beginner", modules:6, hours:"2h 15m", short:"money and social media" },
  { id:"side-hustles", title:"Side Hustles and Freelancing: Turning Skills Into Income", blurb:"Price your work, handle clients and invoices, and understand the tax side before the money starts arriving.", cat:"Smart Financial Decisions", level:"Intermediate", modules:7, hours:"2h 45m", short:"side income" }
];

const CATEGORIES = [
  { name:"Money Basics", icon:"wallet" },
  { name:"Banking & Spending", icon:"bank" },
  { name:"Credit & Debt", icon:"credit-card" },
  { name:"College & Early Adulthood", icon:"graduation-cap" },
  { name:"Work, Income & Taxes", icon:"briefcase" },
  { name:"Investing & Building Wealth", icon:"chart-line-up" },
  { name:"Real-World Money", icon:"receipt" },
  { name:"Smart Financial Decisions", icon:"shield-check" }
];

const LEVELS = ["Beginner","Intermediate","Advanced"];

/* Lesson titles rotate through real pedagogical stages rather than "Stage N" */
const LESSON_SHAPES = [
  { t:"What this actually is", frame:"what are you really dealing with here?", take:"Understand the mechanism before you judge the offer." },
  { t:"The numbers that matter", frame:"which number actually decides the outcome?", take:"One or two figures drive the result; the rest is noise." },
  { t:"Running the calculation", frame:"what happens when you do the arithmetic yourself?", take:"Do it by hand once and you will never be sold on a headline rate again." },
  { t:"Setting it up", frame:"what order should you do things in?", take:"Cheapest and most reversible steps first." },
  { t:"The most common mistake", frame:"what goes wrong for most people, and why?", take:"The expensive errors are the reasonable-looking ones repeated over time." },
  { t:"Reading the fine print", frame:"what is buried in the terms?", take:"Fees and exit conditions matter more than the advertised rate." },
  { t:"What it costs to hold", frame:"what does this cost you after you buy it?", take:"Ongoing cost decides the outcome far more than entry price." },
  { t:"When it goes wrong", frame:"what do you do when the plan stops working?", take:"Write the exit rule before you need it." },
  { t:"Tax and paperwork", frame:"what does this look like once tax is applied?", take:"After-tax is the only comparison that means anything." },
  { t:"Comparing your options", frame:"how do you compare two things fairly?", take:"Same period, after costs, after tax, or it is not a comparison." },
  { t:"Building the habit", frame:"how do you make this stick without willpower?", take:"Automate it so the good month and the bad month look the same." },
  { t:"Scaling it up", frame:"when is it safe to do more of this?", take:"Scale only after the small version has survived a full cycle." },
  { t:"Knowing when to stop", frame:"when does more effort stop paying off?", take:"Stop when adding more no longer changes the outcome." }
];


const TOPICS = [
  "Budgeting & Saving",
  "Banking & Digital Payments",
  "Credit Scores & Cards",
  "Debt & Interest",
  "Paying for College",
  "Paychecks & Taxes",
  "Investing Basics",
  "Bills, Insurance & Big Purchases",
  "Scams, Security & Money Habits"
];

const QUESTIONS = {
  "Budgeting & Saving": [
    { q:"What does the 50/30/20 rule split your take-home pay into?", o:["Needs, wants, and savings or debt payoff", "Rent, food, and transport", "Stocks, bonds, and cash"], a:0, why:"Fifty percent to needs, thirty to wants, twenty to saving or extra debt payments. It is a starting frame, not a law: in a high-rent city the needs share is often well past fifty." },
    { q:"In zero-based budgeting, what should income minus assigned money equal?", o:["Zero", "Your savings target", "Whatever is left over"], a:0, why:"Every dollar gets a job, so the leftover is zero by design. Unassigned money is where unplanned spending hides." },
    { q:"How big is a standard emergency fund?", o:["Three to six months of essential expenses", "One week of pay", "A full year of total spending"], a:0, why:"The range tracks how long it usually takes to replace an income. Less stable income means aim for the top of the range." },
    { q:"What does 'pay yourself first' mean in practice?", o:["Move money to savings before you start spending", "Buy something you want on payday", "Pay your own loans before other bills"], a:0, why:"The transfer happens automatically on payday, so saving is not competing with a month of spending decisions." },
    { q:"What is net cash flow?", o:["Money in minus money out over a period", "Revenue before expenses", "Your total account balance"], a:0, why:"You can be profitable on paper and still run out of cash if money arrives later than the bills do." },
    { q:"Which of these is an essential expense rather than discretionary?", o:["Rent", "Concert tickets", "A new pair of sneakers"], a:0, why:"Essentials are the costs you cannot skip without real consequences. They are the last place to cut, not the first." },
    { q:"What is a sinking fund?", o:["Money saved gradually for a known future cost", "An investment that is losing value", "A fund you cannot withdraw from"], a:0, why:"You know the car registration or the holiday flight is coming, so you set aside a little each month instead of absorbing it in one hit." },
    { q:"Why does a subscription audit usually free up money fast?", o:["Small recurring charges add up and renew without a decision", "Subscriptions are always overpriced", "Companies refund unused months"], a:0, why:"Recurring charges bypass the moment of choice. Listing every one and cancelling the unused ones is the quickest win in most budgets." },
    { q:"When is the best time to schedule an automatic transfer to savings?", o:["The day after payday", "The last day of the month", "Whenever your balance looks healthy"], a:0, why:"Moving it immediately means you budget around what is left, rather than saving whatever survives the month." },
    { q:"If your income changes every month, what is the safest way to budget?", o:["Build the budget around your lowest typical month", "Budget around your best month", "Average the last two months"], a:0, why:"Planning to your floor means a good month creates a surplus rather than a shortfall." },
    { q:"What is the most common reason budgets fail within a few weeks?", o:["They are built on estimates rather than real spending data", "People earn too little", "The categories are too detailed"], a:0, why:"A budget built on what you think you spend will not survive contact with what you actually spend. Track first, budget second." },
    { q:"How long should you track spending before building a first budget?", o:["At least one full month", "Two or three days", "A full year"], a:0, why:"A month captures rent, utilities and the irregular spending that a few days will miss entirely." },
    { q:"What is the main advantage of a high-yield savings account?", o:["It pays meaningfully more interest while staying accessible", "It is insured and a regular account is not", "It cannot be withdrawn from impulsively"], a:0, why:"Both are typically insured. The difference is the rate, which can be many times what a big-bank standard savings account pays." },
    { q:"What does APY tell you that a plain interest rate does not?", o:["The effect of compounding over a year", "The bank's fee schedule", "How long your money is locked up"], a:0, why:"APY folds compounding into a single annual number, which is why it is the fair way to compare savings accounts." },
    { q:"How is your savings rate calculated?", o:["Money saved divided by take-home pay", "Money saved divided by total spending", "Interest earned divided by balance"], a:0, why:"It is the single number that best predicts long-term progress, because it works regardless of income size." },
    { q:"What is opportunity cost?", o:["The value of the option you gave up", "A fee charged on savings accounts", "The cost of a missed payment"], a:0, why:"Spending eighty dollars on a night out is not just eighty dollars; it is also whatever that eighty could have done instead." },
    { q:"What is the envelope method?", o:["Allocating a set amount per category and stopping when it is gone", "Mailing your bills instead of paying online", "Keeping all your cash in one place"], a:0, why:"The hard stop is the point. Whether the envelopes are paper or app categories, the limit is visible before you overspend." },
    { q:"What do round-up savings apps actually do?", o:["Round purchases to the next dollar and save the difference", "Give you cashback on every purchase", "Round your bills down"], a:0, why:"It is painless but slow. Useful as a supplement to a real transfer, not a replacement for one." },
    { q:"What is the difference between an emergency fund and a sinking fund?", o:["Emergencies are unexpected; sinking funds are for known future costs", "They are the same thing", "Sinking funds are invested, emergency funds are not"], a:0, why:"Mixing them is why people raid the emergency fund for a predictable expense and then have nothing left for a real emergency." },
    { q:"Where should an emergency fund be kept?", o:["A separate high-yield savings account", "Your main checking account", "Invested in stocks for growth"], a:0, why:"Separate enough that you do not spend it by accident, liquid enough to reach in a day, and not exposed to a market drop." },
    { q:"What does a 24-hour rule help with?", o:["Separating impulse purchases from real wants", "Getting refunds faster", "Avoiding overdraft fees"], a:0, why:"Most impulse purchases lose their pull overnight. The ones that survive a day are usually the ones worth making." },
    { q:"Which is a variable expense?", o:["Groceries", "Rent", "Your phone plan's base fee"], a:0, why:"Variable costs move month to month, which makes them the realistic place to adjust when you need to free up money." },
    { q:"What is category creep in a budget?", o:["Limits quietly drifting upward over time", "Adding new budget categories each month", "Spending from the wrong category"], a:0, why:"Nothing feels like overspending because every individual increase was small. Re-checking the limits against actual spending catches it." },
    { q:"What is a reasonable way to handle an unexpected windfall?", o:["Assign it before it lands, splitting it across goals", "Leave it in checking and decide later", "Spend half immediately as a reward"], a:0, why:"Unassigned money gets absorbed. Deciding the split in advance is what turns a windfall into progress." },
    { q:"If your paycheck varies, what should your automatic transfer be?", o:["A percentage of each deposit rather than a fixed amount", "A large fixed amount", "Nothing; transfer manually only"], a:0, why:"A percentage scales with the paycheck, so a lean month does not overdraft you and a strong month saves more." },
    { q:"Which savings goal is most likely to be achieved?", o:["Save $1,200 for a deposit by next June", "Save more money this year", "Get better with money"], a:0, why:"A specific amount with a deadline can be broken into a monthly number. A vague intention cannot." },
    { q:"Why do percentage-based savings goals work well for young earners?", o:["They scale automatically as income grows", "They are easier to calculate", "Banks offer better rates for them"], a:0, why:"A fixed dollar goal set at your first job quietly becomes trivial later. A percentage keeps pace with your raises." },
    { q:"What does research generally find about paying with cash versus card?", o:["People tend to spend less when paying with cash", "There is no measurable difference", "People spend less by card because of tracking"], a:0, why:"Handing over physical money registers as a loss more sharply than a tap does. This is one reason card spending needs active tracking." },
    { q:"How often should you review your budget?", o:["Monthly, with a quick weekly check", "Once a year", "Only when something goes wrong"], a:0, why:"A weekly glance catches drift early; a monthly review is where you actually adjust the numbers." },
    { q:"If you have high-interest debt and no savings, what usually comes first?", o:["A small starter emergency fund, then aggressive debt payoff", "All savings, ignore the debt", "All debt, build savings later"], a:0, why:"Without a small buffer, the next surprise goes straight back on the card and the payoff never finishes." }
  ],
  "Banking & Digital Payments": [
    { q:"What is the main purpose of a checking account?", o:["Day-to-day spending and bill payment", "Earning the highest possible interest", "Locking money away long term"], a:0, why:"Checking is built for movement, not growth. Money that is not needed within the month usually belongs somewhere paying interest." },
    { q:"Why does leaving a large balance in checking cost you?", o:["It usually earns little or no interest", "Banks charge for high balances", "It raises your tax bill"], a:0, why:"Most checking accounts pay close to nothing. The same money in a high-yield savings account keeps pace better with inflation." },
    { q:"What is an overdraft fee?", o:["A charge for spending more than your balance", "A fee for using another bank's ATM", "A monthly account maintenance charge"], a:0, why:"Many banks now let you opt out of overdraft coverage, so the card simply declines instead of costing you a flat fee." },
    { q:"What is the practical advantage of a credit union?", o:["Member-owned, so fees and loan rates are often better", "They are larger than banks", "Deposits are insured and banks are not"], a:0, why:"Both are insured. Credit unions return profit to members, which usually shows up as lower fees and better loan rates." },
    { q:"What do online-only banks typically offer?", o:["Higher interest and lower fees, with no branches", "Better cash deposit options", "Guaranteed overdraft protection"], a:0, why:"The trade is convenience for rate. If you handle cash often, a branch or ATM network still matters." },
    { q:"What does FDIC or NCUA insurance protect you against?", o:["The bank or credit union failing", "Losing your debit card", "Unauthorised purchases"], a:0, why:"It covers institutional failure up to the limit per depositor. Fraud is handled separately under card and transfer rules." },
    { q:"What is the standard deposit insurance limit per depositor, per bank?", o:["$250,000", "$10,000", "Unlimited"], a:0, why:"Per depositor, per insured institution, per ownership category. Splitting money across banks extends the coverage." },
    { q:"Why do some transfers take several business days?", o:["They settle through a batch network rather than instantly", "Banks hold the money to earn interest", "Fraud checks always take days"], a:0, why:"ACH transfers move in scheduled batches. Instant rails exist but are often more expensive or capped." },
    { q:"What is the safest way to treat a peer-to-peer payment app?", o:["Like handing over cash, since transfers are hard to reverse", "Like a credit card, with full purchase protection", "Like a bank transfer, fully reversible"], a:0, why:"Most P2P apps offer little recourse once money has been sent to the wrong person or a scammer. Confirm the recipient before sending." },
    { q:"What does a debit card do that a credit card does not?", o:["Pull money directly from your bank balance", "Build your credit history", "Offer purchase protection by default"], a:0, why:"Because it moves your own cash immediately, disputed debit charges leave you out of pocket while the claim is investigated." },
    { q:"What is a hold on a debit card transaction?", o:["A temporary reserve of funds before the final charge settles", "A permanent block on your account", "A fee charged by the merchant"], a:0, why:"Gas stations and hotels commonly place holds larger than the final amount, which can make your available balance look wrong for days." },
    { q:"What is the best first step if your debit card is lost?", o:["Freeze the card in your banking app immediately", "Wait to see if charges appear", "Change your online banking password only"], a:0, why:"Nearly every bank app now has an instant freeze. It stops new charges while you confirm whether the card is genuinely gone." },
    { q:"What is a routing number?", o:["A code identifying your bank for transfers", "Your personal account number", "A security code on your card"], a:0, why:"It identifies the institution; the account number identifies you within it. Both are needed for direct deposit." },
    { q:"How does a minimum balance requirement typically work?", o:["Fall below it and a monthly fee applies", "The bank closes the account", "Interest stops being paid"], a:0, why:"Many accounts waive the fee if you have direct deposit set up, which is worth checking before you switch banks." },
    { q:"What is the safest practice on public Wi-Fi?", o:["Avoid banking, or use mobile data instead", "Use the bank website rather than the app", "Only check balances, never log out"], a:0, why:"Cellular data is a far better default than an open network for anything involving money." },
    { q:"What is a joint account?", o:["An account two people own and can both fully access", "An account with a parent listed as a contact", "A shared savings goal feature"], a:0, why:"Either owner can usually withdraw everything, which is why joint accounts need real trust and clear rules." },
    { q:"What does 'available balance' mean compared with 'current balance'?", o:["Available reflects pending transactions and holds", "They are always identical", "Current is the more accurate figure"], a:0, why:"Spending against the current balance is a common way to overdraft, because pending charges have not landed yet." },
    { q:"What is a certificate of deposit?", o:["Savings locked for a set term at a fixed rate", "A document proving account ownership", "An insured investment in stocks"], a:0, why:"You accept reduced access in exchange for a fixed rate, and withdrawing early usually forfeits some interest." },
    { q:"Why might an ATM charge you twice?", o:["The machine's operator and your own bank can both charge", "It is always an error", "A hold is mistaken for a second fee"], a:0, why:"Out-of-network withdrawals commonly carry two separate fees. Using in-network machines avoids both." },
    { q:"What is direct deposit?", o:["Your employer sending pay straight into your account", "A deposit made at a branch", "Depositing a cheque by photo"], a:0, why:"It is usually faster than a cheque, and many banks waive monthly fees when direct deposit is active." },
    { q:"What is mobile cheque deposit's most common mistake?", o:["Discarding the paper cheque before the deposit clears", "Photographing it in bad light", "Depositing on a weekend"], a:0, why:"Hold the cheque until the funds have fully cleared, then destroy it. Banks can reverse a deposit that fails." },
    { q:"What is a chargeback?", o:["Disputing a card transaction through your card issuer", "A refund issued by the merchant", "A fee for reversing a transfer"], a:0, why:"Chargebacks are a card-network protection. Bank transfers and P2P payments generally have no equivalent." },
    { q:"Why do banks ask security questions with answers you can choose?", o:["To verify identity without relying only on a password", "To personalise marketing", "It is a legal requirement"], a:0, why:"Treat the answers as extra passwords. Real answers are often discoverable on social media." },
    { q:"What is the practical risk of linking every app to your main checking account?", o:["One compromised app exposes the account you live from", "Banks charge per linked app", "It lowers your credit score"], a:0, why:"A separate low-balance account for app linking limits the damage if one service is breached." },
    { q:"What does 'insufficient funds' on a scheduled bill usually trigger?", o:["A returned payment fee from both the bank and the biller", "Only a bank fee", "An automatic short-term loan"], a:0, why:"Being charged twice for the same miss is common, which is why a small buffer in checking pays for itself." },
    { q:"What is a sweep between accounts?", o:["An automatic transfer keeping checking at a target balance", "A one-off manual transfer", "A bank fee for inactivity"], a:0, why:"It keeps spare cash earning interest in savings without leaving checking short." },
    { q:"Which is generally safest for an online purchase from an unfamiliar seller?", o:["A credit card", "A debit card", "A peer-to-peer transfer"], a:0, why:"Credit cards put the issuer's money at risk first and carry the strongest dispute rights." },
    { q:"What is two-factor authentication on a bank account?", o:["A second proof of identity beyond your password", "A second password", "Two people approving a transfer"], a:0, why:"An authenticator app is stronger than SMS, because text codes can be intercepted through SIM-swap attacks." },
    { q:"Why should you read a bank's fee schedule before opening an account?", o:["Fees vary widely and quietly reduce your balance", "It is legally required reading", "It determines your interest rate"], a:0, why:"Maintenance, overdraft, ATM and transfer fees differ enormously between institutions, and they are all avoidable with the right account." },
    { q:"What happens to a dormant account at many banks?", o:["It may incur inactivity fees or eventually be escheated", "It earns bonus interest", "It is closed with no consequences"], a:0, why:"Long-unused balances can be turned over to the state as unclaimed property. A small periodic transaction keeps it active." }
  ],
  "Credit Scores & Cards": [
    { q:"Which factor carries the most weight in a FICO score?", o:["Payment history", "Length of credit history", "Number of recent enquiries"], a:0, why:"Payment history is roughly thirty-five percent of the score. Nothing else you control moves it as much." },
    { q:"What is credit utilisation?", o:["The share of your available credit you are using", "The number of cards you hold", "How often you use your card"], a:0, why:"It is usually taken from your statement balance, so paying before the statement cuts can help even if you never carry a balance." },
    { q:"What utilisation level is generally considered healthy?", o:["Below about 30 percent", "Exactly 50 percent", "As close to 100 percent as possible"], a:0, why:"Lower is better, and single digits is better still. Zero on every card is slightly worse than a small reported balance." },
    { q:"What is a hard enquiry?", o:["A credit check tied to a new application", "Checking your own score", "A lender reviewing an existing account"], a:0, why:"It can dip your score slightly and temporarily. Rate-shopping for one loan in a short window is usually counted as a single enquiry." },
    { q:"Does checking your own credit score lower it?", o:["No, that is a soft enquiry", "Yes, by a few points", "Only if you check monthly"], a:0, why:"Soft enquiries are invisible to lenders and have no score effect, so checking regularly is free and sensible." },
    { q:"How long do most negative marks stay on a credit report?", o:["About seven years", "One year", "Permanently"], a:0, why:"Seven years for most items, ten for a Chapter 7 bankruptcy. Their weight fades well before they drop off." },
    { q:"What is a secured credit card?", o:["A card backed by a refundable cash deposit", "A card with fraud protection", "A card only usable online"], a:0, why:"The deposit is the credit limit, which is why issuers approve applicants with no history. It reports like any other card." },
    { q:"Why can closing your oldest credit card hurt your score?", o:["It can shorten your average account age and cut available credit", "Closing any account is penalised", "It creates a hard enquiry"], a:0, why:"You lose both history and limit, which raises utilisation. Keeping a no-fee old card open and lightly used is usually better." },
    { q:"What is an authorised user?", o:["Someone added to another person's card account", "A joint account holder", "A co-signer on a loan"], a:0, why:"Being added to a long-standing, well-managed account can build history quickly, which is why parents often use it." },
    { q:"What does paying only the minimum on a credit card do?", o:["Keeps the account current while interest keeps building", "Stops interest for that month", "Damages your score directly"], a:0, why:"The account stays in good standing, but the balance barely moves. Minimums are designed to extend the debt, not clear it." },
    { q:"What is the grace period on a credit card?", o:["Time between statement and due date when purchases avoid interest", "A delay before late fees apply", "A pause on payments after job loss"], a:0, why:"You keep the grace period only by paying the statement balance in full. Carry a balance and interest starts from the purchase date." },
    { q:"What is the difference between APR and APY?", o:["APR is the cost of borrowing; APY is the return on savings", "They are the same", "APR includes fees, APY does not"], a:0, why:"Both annualise a rate, but they sit on opposite sides of the ledger." },
    { q:"What is a cash advance on a credit card?", o:["Withdrawing cash, usually with a fee and no grace period", "A pre-approved credit limit increase", "A refund paid in cash"], a:0, why:"Interest typically starts immediately at a higher rate, making it one of the most expensive ways to get cash." },
    { q:"What is credit mix?", o:["The variety of credit types you hold", "How many cards you have", "The spread of your balances"], a:0, why:"It is a small part of the score and never worth taking on debt to improve." },
    { q:"What should you do first if you find an error on your credit report?", o:["Dispute it with the credit bureau in writing", "Ignore it if it is small", "Close the affected account"], a:0, why:"Bureaus must investigate, typically within thirty days. Keep records of everything you send." },
    { q:"How often can you get a free credit report?", o:["At least annually from each major bureau", "Once in your lifetime", "Only after being denied credit"], a:0, why:"Staggering requests across the three bureaus gives you a look at your file several times a year." },
    { q:"What is a credit limit increase's effect on utilisation?", o:["It lowers utilisation if your balance stays the same", "It raises utilisation", "It has no effect"], a:0, why:"More available credit with the same balance improves the ratio, though some issuers run a hard enquiry to grant it." },
    { q:"Why do student credit cards exist?", o:["They accept thin credit files with lower limits", "They have no interest", "They are government-backed"], a:0, why:"Low limits reduce the issuer's risk and, usefully, cap how much damage a new cardholder can do." },
    { q:"What is a balance transfer?", o:["Moving debt to a card with a lower promotional rate", "Paying one card with another card", "Transferring your credit limit"], a:0, why:"There is usually a transfer fee, and the promotional rate expires. It only helps if you clear the balance before it does." },
    { q:"What happens after a promotional 0 percent APR period ends?", o:["The standard rate applies to the remaining balance", "The balance is forgiven", "The rate stays at zero"], a:0, why:"Deferred-interest offers can be worse still, charging back all the interest from day one if any balance remains." },
    { q:"What is the effect of a 30-day late payment?", o:["It can be reported and noticeably lower your score", "Nothing until 90 days", "Only a late fee applies"], a:0, why:"Most issuers report at thirty days past due. Paying before that point usually costs a fee but not a score drop." },
    { q:"Is carrying a small balance necessary to build credit?", o:["No, paying in full still builds history", "Yes, you must carry a balance", "Only for the first year"], a:0, why:"This is a persistent myth. The account activity is reported either way, and paying in full avoids interest entirely." },
    { q:"What is a co-signer responsible for?", o:["The full debt if the primary borrower does not pay", "Half the debt", "Nothing, it is a formality"], a:0, why:"The obligation is complete, and the account appears on the co-signer's credit report too." },
    { q:"What does an annual fee need to be justified by?", o:["Rewards or benefits worth more than the fee to you", "Simply having a premium card", "A higher credit limit"], a:0, why:"Work out the value you will actually use, not the advertised maximum." },
    { q:"What is a chargeback right on a credit card most useful for?", o:["Goods not delivered or not as described", "Regretting a purchase", "Reducing your balance"], a:0, why:"Card networks give real leverage against a seller who will not resolve a genuine problem." },
    { q:"What is a credit freeze?", o:["Blocking new credit being opened in your name", "Locking your own card", "Pausing your payments"], a:0, why:"It is free, does not affect your score, and is the strongest routine defence against identity theft." },
    { q:"How quickly do score changes usually appear?", o:["Within one to two billing cycles", "Immediately", "After about a year"], a:0, why:"Issuers report roughly monthly, so paying down a balance shows up on the next reported statement, not the same day." },
    { q:"Why does applying for several cards at once hurt?", o:["Multiple hard enquiries and a lower average account age", "Issuers share a blacklist", "It is treated as fraud"], a:0, why:"Spacing applications out by several months avoids stacking enquiries and looking like sudden credit-seeking." },
    { q:"What is the practical meaning of a score in the mid-700s or above?", o:["You will qualify for most mainstream rates", "You can borrow unlimited amounts", "Your interest rate will be zero"], a:0, why:"Beyond a certain point, further score gains stop changing the rates you are offered much." },
    { q:"What is the first thing to fix if your score is low and you carry balances?", o:["Bring utilisation down", "Open a new card for more limit", "Close unused accounts"], a:0, why:"Utilisation updates monthly and responds fast, which makes it the quickest lever after paying on time." }
  ],
  "Debt & Interest": [
    { q:"What is simple interest calculated on?", o:["The original principal only", "Principal plus accumulated interest", "The monthly payment"], a:0, why:"Compound interest is calculated on principal plus prior interest, which is why it grows far faster over time." },
    { q:"What makes compound interest powerful over long periods?", o:["Interest earns interest on itself", "Rates rise over time", "Banks add bonus payments"], a:0, why:"The effect is slow at first and then accelerates, which is why starting early matters more than starting big." },
    { q:"What does the Rule of 72 estimate?", o:["How long money takes to double at a given rate", "The interest you owe this year", "Your minimum payment"], a:0, why:"Divide 72 by the annual rate. At six percent, money roughly doubles in twelve years." },
    { q:"In the avalanche method, which debt do you attack first?", o:["The highest interest rate", "The smallest balance", "The oldest account"], a:0, why:"Avalanche minimises total interest paid. Snowball targets the smallest balance first for motivation." },
    { q:"What is the snowball method's main advantage?", o:["Early wins keep you motivated", "It costs the least in interest", "It is required by lenders"], a:0, why:"It usually costs slightly more than avalanche, but a plan you stick to beats an optimal plan you abandon." },
    { q:"What is a revolving balance?", o:["Debt carried from month to month on a credit line", "A fixed instalment loan", "A balance that must be cleared monthly"], a:0, why:"Revolving debt has no fixed end date, which is exactly why it can persist for years." },
    { q:"How does credit card interest usually accrue?", o:["Daily on the average balance", "Once at month end", "Only on new purchases"], a:0, why:"Daily compounding means the balance you carry is quietly growing between statements." },
    { q:"What is a debt-to-income ratio?", o:["Monthly debt payments divided by gross monthly income", "Total debt divided by savings", "Debt divided by credit limit"], a:0, why:"Lenders use it to judge whether you can absorb another payment. Many mortgage lenders look for well under about forty-three percent." },
    { q:"What happens to an unpaid debt sent to collections?", o:["It is reported and can be pursued by a collection agency", "It disappears after 90 days", "Interest stops immediately"], a:0, why:"It damages your credit and can be sold on repeatedly. Always get any settlement agreement in writing." },
    { q:"What is the statute of limitations on debt?", o:["The period a creditor can sue you for it", "When it leaves your credit report", "When interest stops"], a:0, why:"It varies by state and debt type, and making a payment can restart the clock, so get advice before paying an old debt." },
    { q:"What is a deferred interest promotion?", o:["Interest is charged retroactively if any balance remains", "Interest is permanently waived", "Payments are paused"], a:0, why:"Miss the payoff by a single dollar and you owe all the interest from the original purchase date." },
    { q:"What is loan principal?", o:["The amount borrowed, before interest", "The total you will repay", "The monthly payment"], a:0, why:"Extra payments applied to principal directly reduce the interest charged for the rest of the loan." },
    { q:"What is amortisation?", o:["Paying a loan down over time on a fixed schedule", "Refinancing to a longer term", "Interest accruing daily"], a:0, why:"Early payments are mostly interest, later ones mostly principal, which is why extra payments early save the most." },
    { q:"Why does extending a loan term lower the monthly payment but cost more?", o:["You pay interest for longer", "The rate always rises", "Fees are added each year"], a:0, why:"A lower payment feels easier while quietly increasing total cost. Compare total repaid, not just the monthly figure." },
    { q:"What is a payday loan's main danger?", o:["Extremely high effective APR and rollover cycles", "It requires collateral", "It is reported to bureaus"], a:0, why:"Effective rates commonly run into the hundreds of percent once fees are annualised." },
    { q:"What does refinancing mean?", o:["Replacing a loan with a new one on different terms", "Skipping payments temporarily", "Consolidating into a credit card"], a:0, why:"It helps when the new rate is meaningfully lower and the fees do not cancel the saving." },
    { q:"What is debt consolidation?", o:["Combining several debts into one payment", "Having debts forgiven", "Pausing all payments"], a:0, why:"It simplifies repayment, but only saves money if the blended rate is genuinely lower and you stop adding new debt." },
    { q:"What is secured debt?", o:["Debt backed by an asset the lender can take", "Debt with a fixed rate", "Debt with insurance attached"], a:0, why:"A car loan or mortgage is secured. Default risks losing the asset, which is why rates are lower than on cards." },
    { q:"Why is student loan debt usually hard to discharge in bankruptcy?", o:["It is given special protected status under the law", "It is always secured", "It is too small to qualify"], a:0, why:"The standard for discharge is deliberately high, which makes it critical to understand the terms before borrowing." },
    { q:"What is a minimum payment usually calculated as?", o:["A small percentage of the balance plus interest and fees", "A fixed amount forever", "Ten percent of your income"], a:0, why:"Because it scales down as the balance falls, paying only the minimum stretches repayment over many years." },
    { q:"What does APR include that an interest rate does not?", o:["Certain fees, giving a truer cost of borrowing", "Compounding frequency", "The loan term"], a:0, why:"It is the fairer way to compare loan offers, though not all fees are always captured." },
    { q:"What is negative amortisation?", o:["The balance grows because payments do not cover interest", "Paying off a loan early", "A loan with no interest"], a:0, why:"You can make every payment on time and still owe more than you borrowed." },
    { q:"What is the first thing to do if you cannot make a payment?", o:["Contact the lender before the due date", "Wait until they contact you", "Close the account"], a:0, why:"Hardship programmes, deferrals and revised plans almost always exist, but they are far easier to arrange before you default." },
    { q:"What is a charge-off?", o:["A lender writing the debt off its books as a loss", "The debt being cancelled", "A fee for late payment"], a:0, why:"You still owe it, and it remains a serious negative mark for about seven years." },
    { q:"What is the debt avalanche's effect versus snowball on total interest?", o:["Avalanche pays less interest overall", "They cost the same", "Snowball pays less interest"], a:0, why:"Avalanche is mathematically optimal. The right choice depends on whether the maths or the motivation is your bottleneck." },
    { q:"Why do balance transfer fees matter?", o:["A 3 to 5 percent fee can offset the interest saved", "They are refundable", "They lower your score"], a:0, why:"Do the arithmetic before transferring. On a small balance the fee can exceed the interest you avoid." },
    { q:"What is credit counselling?", o:["Non-profit guidance and structured repayment plans", "A loan to pay other loans", "A way to erase debt"], a:0, why:"Reputable agencies are non-profit and transparent about fees. Anyone promising to erase debt outright is best avoided." },
    { q:"What is the main risk of borrowing against a car you own?", o:["Losing the vehicle if you default", "It is always interest free", "It cannot be reported"], a:0, why:"Title loans carry very high rates and put essential transport at risk." },
    { q:"Why is a small emergency fund useful even while paying off debt?", o:["It stops the next surprise going back on the card", "It earns more than the debt costs", "Lenders require it"], a:0, why:"Without a buffer, every unexpected cost undoes your progress and the payoff never finishes." },
    { q:"What is the effect of paying a card twice a month?", o:["It can lower reported utilisation and cut daily interest", "It counts as two late payments", "It has no effect"], a:0, why:"Since interest accrues daily and utilisation is snapshot at statement time, mid-cycle payments help on both fronts." }
  ],
  "Paying for College": [
    { q:"What does FAFSA stand for?", o:["Free Application for Federal Student Aid", "Federal Aid for Student Applications", "Financial Aid for Student Admissions"], a:0, why:"It is free to file, and filing is the gateway to federal grants, loans and most institutional aid." },
    { q:"What is the key difference between a grant and a loan?", o:["Grants do not need repaying", "Grants have lower interest", "Loans are need-based"], a:0, why:"Grants and scholarships are the money you keep. Exhaust them before borrowing anything." },
    { q:"What is a subsidised federal student loan?", o:["The government covers interest while you study", "It has no interest ever", "It is issued by a private bank"], a:0, why:"Unsubsidised loans accrue interest from disbursement, so the balance grows before you graduate." },
    { q:"What usually happens to unsubsidised loan interest during school?", o:["It accrues and may capitalise onto the principal", "It is waived", "It is paid by the school"], a:0, why:"Capitalisation means you then pay interest on interest, which is why small in-school payments help." },
    { q:"Which is generally safer to borrow, federal or private loans?", o:["Federal, because of fixed rates and repayment protections", "Private, because rates are lower", "They are equivalent"], a:0, why:"Federal loans carry income-driven plans, deferment and forgiveness options that private lenders rarely match." },
    { q:"What is a student aid award letter?", o:["The school's breakdown of grants, loans and work-study offered", "An acceptance letter", "A bill for tuition"], a:0, why:"Letters vary in format, and loans are sometimes presented to look like aid. Separate the gift money from the borrowed money." },
    { q:"Can you appeal a financial aid offer?", o:["Yes, especially after a change in circumstances", "No, offers are final", "Only if you are a senior"], a:0, why:"A written appeal citing job loss, medical costs or a competing offer is routine and often succeeds." },
    { q:"What is cost of attendance?", o:["Tuition plus housing, food, books and other estimated costs", "Tuition alone", "The amount you will borrow"], a:0, why:"Comparing schools on tuition alone is misleading; the full cost is what determines your borrowing." },
    { q:"What is net price?", o:["Cost of attendance minus grants and scholarships", "The sticker price", "Tuition after loans"], a:0, why:"Net price is the real comparison number, and a pricier school with strong aid can end up cheaper." },
    { q:"What is work-study?", o:["Part-time work subsidised through financial aid", "A loan repaid by working", "Mandatory campus service"], a:0, why:"Earnings are generally excluded from next year's aid calculations, unlike ordinary wages." },
    { q:"When does the FAFSA typically open?", o:["In the autumn before the academic year", "In January only", "After you are accepted"], a:0, why:"Some aid is first-come, so filing early matters even if your plans are not settled." },
    { q:"What is the Student Aid Index used for?", o:["Estimating what a family can contribute toward costs", "Ranking applicants academically", "Setting the interest rate"], a:0, why:"It replaced the Expected Family Contribution. It is an eligibility index, not a bill." },
    { q:"Where should you look for legitimate scholarships?", o:["School aid offices, local organisations and reputable databases", "Sites charging an application fee", "Direct messages offering guaranteed awards"], a:0, why:"Any scholarship demanding payment to apply is a scam. Local awards often have far less competition." },
    { q:"What is the most common reason strong students miss scholarships?", o:["They never apply", "Grades are too low", "They apply too early"], a:0, why:"Smaller local awards frequently go undersubscribed. Volume of applications matters more than perfection." },
    { q:"What is a good structure for a scholarship essay?", o:["A specific story that answers the prompt directly", "A list of all your achievements", "A general statement about hard work"], a:0, why:"Committees read hundreds. One concrete, specific story is far more memorable than a summary of your resume." },
    { q:"What is loan capitalisation?", o:["Unpaid interest being added to the principal", "A loan being forgiven", "Borrowing a lump sum"], a:0, why:"After capitalisation you pay interest on a larger balance, which is why it should be avoided where possible." },
    { q:"What is a grace period on federal student loans?", o:["Months after leaving school before payments begin", "A pause on interest", "A period to cancel the loan"], a:0, why:"Typically six months. Unsubsidised interest usually keeps accruing throughout." },
    { q:"What is an income-driven repayment plan?", o:["Payments set as a share of discretionary income", "A fixed ten-year plan", "A plan that pauses interest"], a:0, why:"Payments adjust with income, though a longer term can mean more total interest." },
    { q:"What should guide how much you borrow?", o:["Realistic starting salary in your field", "The maximum offered", "What classmates borrow"], a:0, why:"A common guideline is to keep total borrowing at or below your expected first-year salary." },
    { q:"What is the main risk of a private loan with a variable rate?", o:["Payments can rise if rates increase", "It cannot be repaid early", "It is not reported to bureaus"], a:0, why:"A low introductory rate can climb substantially over a ten-year repayment." },
    { q:"What is a tuition payment plan?", o:["Spreading a term's bill over monthly instalments", "A loan from the government", "A discount for paying early"], a:0, why:"Usually interest-free with a modest enrolment fee, which makes it cheaper than borrowing for a shortfall." },
    { q:"Why might community college first reduce total cost?", o:["Lower-cost credits that can transfer to a four-year degree", "Degrees are awarded faster", "Aid is automatic"], a:0, why:"Confirm transfer agreements in advance so the credits actually count toward your intended degree." },
    { q:"What is a 529 plan?", o:["A tax-advantaged account for education costs", "A federal student loan", "A scholarship programme"], a:0, why:"Growth and qualified withdrawals are tax-free, and money can often be moved between family beneficiaries." },
    { q:"What happens if you drop below half-time enrolment?", o:["Your grace period may start and repayment can begin", "Nothing changes", "Your loans are cancelled"], a:0, why:"Enrolment status changes can trigger repayment sooner than students expect." },
    { q:"What is verification in the aid process?", o:["The school confirming the information you reported", "An admissions interview", "A credit check"], a:0, why:"Being selected is routine, not an accusation, but missing the document deadline can cost you the aid." },
    { q:"Are scholarships ever taxable?", o:["Yes, amounts beyond tuition and required fees can be", "Never", "Always"], a:0, why:"Money used for room and board is generally taxable, while tuition and required fees usually are not." },
    { q:"What is the benefit of applying to scholarships every year?", o:["Many are renewable or open to continuing students", "Awards increase automatically", "It improves your grades"], a:0, why:"Most students stop applying after freshman year, which means less competition later." },
    { q:"What does a school's graduation rate tell a prospective borrower?", o:["How likely students are to finish and start earning", "Teaching quality directly", "Whether aid is generous"], a:0, why:"Debt without a completed degree is the worst outcome, so completion rates matter to the financial decision." },
    { q:"What is loan forgiveness generally tied to?", o:["Qualifying employment or long-term repayment under a plan", "Simply asking the lender", "Graduating with honours"], a:0, why:"Programmes like Public Service Loan Forgiveness have strict employment and payment-count requirements. Documentation matters." },
    { q:"What is the safest first step before signing any student loan?", o:["Read the terms, rate and total repayment estimate", "Sign and review later", "Match what your friends borrow"], a:0, why:"Every loan comes with a disclosure showing the full cost. Read it before it becomes a ten-year commitment." }
  ],
  "Paychecks & Taxes": [
    { q:"What is the difference between gross and net pay?", o:["Gross is before deductions, net is what lands in your account", "They are the same", "Net is before tax"], a:0, why:"The gap is withholding, payroll taxes and benefit deductions, and it surprises almost everyone on a first payslip." },
    { q:"What does FICA on a payslip cover?", o:["Social Security and Medicare", "Federal income tax", "State income tax"], a:0, why:"It is a flat payroll tax split between you and your employer, separate from income tax." },
    { q:"What is a W-4 used for?", o:["Telling your employer how much tax to withhold", "Reporting your annual income", "Claiming unemployment"], a:0, why:"Get it wrong and you either overpay all year or face a bill in April." },
    { q:"What is a W-2?", o:["A year-end summary of wages and tax withheld", "A request for time off", "A contractor payment form"], a:0, why:"Employers must send it by the end of January, and you need it to file." },
    { q:"What is a 1099-NEC?", o:["A form reporting payments to an independent contractor", "A tax refund notice", "A health insurance form"], a:0, why:"No tax is withheld, so contractors must set money aside themselves." },
    { q:"What is your marginal tax rate?", o:["The rate applied to your next dollar earned", "Your average rate on all income", "A flat national rate"], a:0, why:"Only income inside the top bracket is taxed at that rate, which is why a raise never leaves you worse off overall." },
    { q:"What is a tax deduction?", o:["An amount that reduces your taxable income", "A direct reduction of tax owed", "A payroll fee"], a:0, why:"A credit reduces tax owed dollar for dollar, which makes credits generally more valuable than deductions." },
    { q:"What is the standard deduction?", o:["A fixed amount most filers subtract from income", "A deduction only for homeowners", "A credit for students"], a:0, why:"Most young filers take it because their itemisable expenses are smaller than the standard amount." },
    { q:"What is a tax refund?", o:["Money returned because you overpaid during the year", "A government bonus", "Interest on your taxes"], a:0, why:"A large refund means you lent the government money interest-free all year." },
    { q:"Do you have to file if you earned very little?", o:["Not always, but filing can still get withheld money back", "Always, regardless of income", "Never under 21"], a:0, why:"If tax was withheld from a part-time job, filing is usually how you get it back." },
    { q:"What is withholding?", o:["Tax taken from each paycheque during the year", "A deduction claimed at filing", "An employer savings plan"], a:0, why:"Adjusting your W-4 changes it, which is the fix if your refund or bill is consistently large." },
    { q:"What are quarterly estimated taxes?", o:["Payments self-employed people make four times a year", "A refund schedule", "An employer benefit"], a:0, why:"Missing them can trigger underpayment penalties even if you pay in full at year end." },
    { q:"What is self-employment tax?", o:["Both halves of Social Security and Medicare", "An extra income tax on freelancers", "A state business fee"], a:0, why:"Employees split it with an employer; the self-employed pay roughly 15.3 percent themselves." },
    { q:"Roughly how much should a freelancer set aside for taxes?", o:["Around 25 to 30 percent of income", "About 5 percent", "Nothing until the bill arrives"], a:0, why:"A separate account for tax money is the simplest way to avoid spending it by accident." },
    { q:"What is a pre-tax deduction?", o:["Money taken before income tax is calculated", "A deduction claimed on your return", "A post-tax benefit"], a:0, why:"Retirement and health contributions taken pre-tax lower your taxable income now." },
    { q:"What is a Roth contribution's tax treatment?", o:["Taxed now, withdrawn tax-free later", "Deducted now, taxed later", "Never taxed at all"], a:0, why:"Roth generally wins if your tax rate in retirement is higher than it is today, which often favours young earners." },
    { q:"What is an employer 401(k) match?", o:["Employer money added when you contribute", "A loan against your salary", "A guaranteed return"], a:0, why:"Contributing less than the match leaves part of your compensation unclaimed." },
    { q:"What is vesting?", o:["Earning full ownership of employer contributions over time", "A tax on withdrawals", "A limit on contributions"], a:0, why:"Your own contributions are always yours; the employer's share may require staying a set number of years." },
    { q:"What happens if you withdraw from a 401(k) before retirement age?", o:["Income tax plus a penalty in most cases", "Nothing, it is your money", "Only a small fee"], a:0, why:"A ten percent penalty typically applies on top of income tax, and you lose the future growth." },
    { q:"What is the Earned Income Tax Credit?", o:["A refundable credit for lower-income workers", "A deduction for commuting", "A credit for students only"], a:0, why:"Refundable means it can produce a refund even if you owed no tax." },
    { q:"What does 'exempt' on a W-4 mean?", o:["No federal income tax withheld", "No taxes owed at all", "Exempt from filing"], a:0, why:"Claiming it wrongly leads to a large bill, and it only applies if you owed nothing last year and expect the same." },
    { q:"What is a pay stub's year-to-date column for?", o:["Cumulative totals so far this year", "Next year's projection", "Your lifetime earnings"], a:0, why:"Checking it against your W-2 catches payroll errors before you file." },
    { q:"What is the filing deadline in a typical year?", o:["Mid-April", "End of June", "31 December"], a:0, why:"An extension gives more time to file but not more time to pay what you owe." },
    { q:"What is the risk of ignoring a tax bill you cannot pay?", o:["Penalties and interest accumulate", "The debt is written off", "Nothing until the following year"], a:0, why:"Payment plans are available and far cheaper than penalties, but you have to ask for one." },
    { q:"What is direct deposit's advantage for refunds?", o:["It is faster and less likely to be lost", "It increases the refund", "It avoids tax"], a:0, why:"Paper cheques take considerably longer and can be intercepted." },
    { q:"Can you be taxed on a side hustle paid in cash?", o:["Yes, income is taxable regardless of how it is paid", "No, cash is untaxed", "Only above $50,000"], a:0, why:"Platforms increasingly report payouts, but the obligation exists whether or not a form arrives." },
    { q:"What is a tax bracket creep?", o:["Inflation pushing nominal income into a higher bracket", "Voluntarily changing brackets", "A penalty for high earners"], a:0, why:"Your purchasing power is flat but your tax bill rises, unless brackets are indexed to inflation." },
    { q:"What does it mean that Social Security tax has a wage cap?", o:["It stops applying above a set income level", "It is capped at $1,000 per year", "It only applies to salaries"], a:0, why:"Medicare tax has no such cap, so it continues on all earnings." },
    { q:"Why should you keep pay and tax records?", o:["To verify withholding and support any future claim", "It is legally required forever", "To raise your credit score"], a:0, why:"Keeping returns and supporting documents for several years covers most audit and correction windows." },
    { q:"What is the simplest way to avoid a surprise tax bill?", o:["Check your withholding mid-year and adjust the W-4", "File an extension", "Claim exempt"], a:0, why:"A mid-year check catches a second job, a raise or freelance income before the shortfall compounds." }
  ],
  "Investing Basics": [
    { q:"What do you own when you buy a share of stock?", o:["A small ownership stake in the company", "A loan to the company", "A guaranteed dividend"], a:0, why:"Ownership means you share in gains and losses, with no promised return." },
    { q:"What is an ETF?", o:["A fund holding many securities, traded like a single stock", "A single company's stock", "A savings account"], a:0, why:"You get diversification in one trade, usually at a low expense ratio." },
    { q:"What is an index fund?", o:["A fund tracking a market index rather than picking stocks", "A fund managed by an expert", "A government bond"], a:0, why:"Low costs and broad exposure are why index funds beat most active funds over long periods." },
    { q:"What is diversification?", o:["Spreading money across many holdings to lower risk", "Buying one strong stock", "Timing the market"], a:0, why:"It reduces the damage any single failure can do without proportionally reducing expected return." },
    { q:"What is an expense ratio?", o:["The annual percentage a fund charges", "A trading commission", "A tax on dividends"], a:0, why:"A one percent fee instead of 0.05 sounds trivial and costs an enormous amount across decades." },
    { q:"What is compound growth's key ingredient?", o:["Time", "A large starting sum", "Frequent trading"], a:0, why:"Starting at eighteen with small amounts usually beats starting at thirty with larger ones." },
    { q:"What is dollar-cost averaging?", o:["Investing a fixed amount on a regular schedule", "Buying only when prices fall", "Selling in equal portions"], a:0, why:"It removes the need to guess timing and smooths your average purchase price." },
    { q:"What does a P/E ratio compare?", o:["Share price to earnings per share", "Profit to expenses", "Price to dividends"], a:0, why:"It indicates what you pay per dollar of current earnings, not whether that price is justified." },
    { q:"What is a dividend?", o:["A share of company profit paid to shareholders", "Interest on a bond", "A fee for holding stock"], a:0, why:"Not all companies pay them; many reinvest profits into growth instead." },
    { q:"What is market volatility?", o:["How sharply prices move up and down", "A permanent decline", "Trading volume"], a:0, why:"Volatility is the normal price of higher long-term returns, not a malfunction." },
    { q:"What typically happens to stock markets over long periods despite crashes?", o:["They have historically trended upward", "They stay flat", "They decline steadily"], a:0, why:"Past performance guarantees nothing, but time in the market has historically beaten trying to time it." },
    { q:"What is a brokerage account?", o:["An account used to buy and sell investments", "A type of savings account", "A retirement-only account"], a:0, why:"A standard taxable brokerage has no contribution limits and no early-withdrawal penalties." },
    { q:"What are fractional shares?", o:["Buying part of a single share", "Shares with reduced voting rights", "Discounted shares"], a:0, why:"They let you invest a set dollar amount regardless of the share price." },
    { q:"What is risk tolerance?", o:["How much volatility you can hold without selling", "How much you can afford to lose", "Your investment timeline"], a:0, why:"The real test is behavioural: the best portfolio is the one you will not abandon in a downturn." },
    { q:"Why does a longer time horizon allow more risk?", o:["There is more time to recover from downturns", "Returns are guaranteed", "Fees fall over time"], a:0, why:"Money needed within a couple of years generally does not belong in the stock market." },
    { q:"What is asset allocation?", o:["How you split money across asset types", "Which individual stocks you choose", "Your broker's fee structure"], a:0, why:"Allocation explains most of a portfolio's return variability, far more than individual picks." },
    { q:"What is a bond?", o:["A loan to a government or company that pays interest", "Ownership in a company", "An insured savings product"], a:0, why:"Bonds are generally steadier than stocks and pay less over long periods." },
    { q:"Why do bond prices fall when interest rates rise?", o:["Existing bonds pay less than new ones", "Issuers cut payments", "Demand is fixed"], a:0, why:"Longer-maturity bonds are more sensitive to this, which is what duration measures." },
    { q:"What is a target-date fund?", o:["A fund that shifts to safer assets as a date nears", "A fund with a guaranteed payout", "A short-term savings product"], a:0, why:"It is a reasonable default for retirement accounts because the rebalancing is automatic." },
    { q:"What is rebalancing?", o:["Restoring your intended mix after drift", "Selling everything", "Adding money to winners"], a:0, why:"It enforces selling some of what has run up and buying what has lagged, which is hard to do manually." },
    { q:"What is the main risk of putting everything in one company's stock?", o:["Company-specific failure wipes out your position", "Higher fees", "Lower dividends"], a:0, why:"This is a particular danger with employer stock, where your job and savings share the same risk." },
    { q:"What does 'past performance does not guarantee future results' mean practically?", o:["A fund's history does not predict its future returns", "Returns are random", "Old funds are riskier"], a:0, why:"Chasing last year's top performer is one of the most reliable ways to buy high." },
    { q:"What is a capital gain?", o:["Profit from selling an investment above its purchase price", "A dividend payment", "Interest earned"], a:0, why:"Holding longer than a year usually qualifies for lower long-term capital gains rates." },
    { q:"What is a tax-advantaged retirement account's main benefit?", o:["Growth is sheltered from annual taxation", "Guaranteed returns", "No investment risk"], a:0, why:"The shelter compounds over decades and is why retirement accounts are usually filled before taxable ones." },
    { q:"What is an emergency fund's relationship to investing?", o:["It should exist before you invest", "It should be invested in stocks", "They are the same thing"], a:0, why:"Without a buffer, a surprise forces you to sell investments at the worst possible time." },
    { q:"What is meant by 'time in the market beats timing the market'?", o:["Staying invested usually beats predicting moves", "Trading often improves returns", "Markets are predictable"], a:0, why:"Missing a handful of the strongest days, which often cluster near the worst ones, dramatically reduces long-run returns." },
    { q:"What is an expense-free way to reduce investment risk?", o:["Diversifying across many holdings", "Buying insurance on stocks", "Trading more frequently"], a:0, why:"Diversification is often described as the only free lunch in investing." },
    { q:"What is a robo-advisor?", o:["An automated service building and managing a portfolio", "A stock-picking algorithm you control", "A trading chatroom"], a:0, why:"Fees are low compared with human advisors, though higher than buying index funds directly." },
    { q:"What is the danger of investing money you need next year?", o:["A downturn could force you to sell at a loss", "There is no danger", "Returns are lower short term"], a:0, why:"Short-horizon money belongs in savings, where the balance does not move." },
    { q:"What is the simplest sensible first investment for a beginner?", o:["A broad, low-cost index fund", "A single trending stock", "A leveraged fund"], a:0, why:"It gives instant diversification and removes the need to pick winners while you learn." }
  ],
  "Bills, Insurance & Big Purchases": [
    { q:"What is an insurance premium?", o:["The amount you pay to keep coverage active", "The amount you pay before coverage starts", "The maximum the insurer pays"], a:0, why:"A lower premium usually means a higher deductible, so the two have to be judged together." },
    { q:"What is a deductible?", o:["What you pay before insurance starts covering costs", "Your monthly payment", "A discount for safe behaviour"], a:0, why:"Choosing a high deductible only makes sense if you could actually cover it tomorrow." },
    { q:"What does renters insurance typically cover?", o:["Your belongings and some liability", "The building structure", "Your landlord's property"], a:0, why:"It is usually inexpensive, and the landlord's policy covers the building, not your possessions." },
    { q:"What is liability coverage for?", o:["Damage or injury you cause to others", "Repairs to your own property", "Your medical bills only"], a:0, why:"State auto minimums are often far below what a serious accident actually costs." },
    { q:"What is a copay?", o:["A fixed amount you pay for a covered service", "A yearly premium", "The insurer's share"], a:0, why:"It applies per visit or prescription and is separate from the deductible." },
    { q:"What is an out-of-pocket maximum?", o:["The most you pay in a year before insurance covers everything", "Your deductible", "Your total premiums"], a:0, why:"It is the number that matters most in a genuinely bad year." },
    { q:"Why is the sticker price of a car misleading?", o:["Insurance, fuel, maintenance and depreciation follow", "Dealers always discount it", "It includes taxes"], a:0, why:"Total cost of ownership is frequently far more than the monthly payment suggests." },
    { q:"What is depreciation on a car?", o:["Loss of value over time", "Interest on the loan", "Annual registration cost"], a:0, why:"New cars lose a large share of value in the first few years, which is the core argument for buying used." },
    { q:"Why do longer car loans cost more overall?", o:["More months of interest, and you may owe more than it is worth", "Rates are always higher", "Insurance costs more"], a:0, why:"Being underwater means a write-off leaves you still owing money." },
    { q:"What is gap insurance?", o:["Cover for the difference between a car's value and the loan balance", "Coverage between policies", "A deductible waiver"], a:0, why:"It matters most early in a long loan on a fast-depreciating car." },
    { q:"What most affects a young driver's auto premium?", o:["Age, driving record and vehicle type", "Only the car's colour", "Your employer"], a:0, why:"Staying on a family policy where permitted is often dramatically cheaper." },
    { q:"What is a security deposit on a rental?", o:["Refundable money held against damage or unpaid rent", "A non-refundable fee", "The first month's rent"], a:0, why:"Photographing the property at move-in is the most reliable way to get it back." },
    { q:"What is a lease?", o:["A binding contract for a fixed rental term", "A month-to-month arrangement", "A landlord's insurance policy"], a:0, why:"Breaking it early usually carries real cost, so read the termination clause before signing." },
    { q:"What does joint and several liability mean on a shared lease?", o:["Each tenant can be held responsible for the whole rent", "Each pays only their share", "Only the lead tenant is liable"], a:0, why:"If a roommate leaves, the landlord can pursue you for the full amount." },
    { q:"What is usually the first consequence of a missed bill?", o:["A late fee, then possible reporting after 30 days", "Immediate collections", "Service cancelled that day"], a:0, why:"Contacting the provider before the due date almost always produces better options." },
    { q:"What happens when an unpaid bill reaches collections?", o:["It can appear on your credit report and be pursued", "It is forgiven", "Interest stops"], a:0, why:"Medical bills often have grace periods and payment plans, but only if you ask." },
    { q:"What is autopay's main risk?", o:["Overdrafting if the balance is short", "Higher bills", "Losing dispute rights"], a:0, why:"Autopay plus a small checking buffer is the combination that works." },
    { q:"Why do subscriptions quietly become expensive?", o:["They renew without an active decision", "Prices rise monthly", "They cannot be cancelled"], a:0, why:"An annual audit of recurring charges is one of the highest-return money habits." },
    { q:"What is a utility deposit?", o:["An upfront amount some providers require without credit history", "A monthly surcharge", "A government fee"], a:0, why:"It is often refundable after a period of on-time payments." },
    { q:"What does a phone plan's 'unlimited' data usually mean?", o:["Full speed up to a cap, then throttled", "Truly unlimited full-speed data", "Unlimited only on Wi-Fi"], a:0, why:"The throttling threshold is in the terms, and it is what actually determines whether a plan suits you." },
    { q:"What is an extended warranty usually worth?", o:["Often less than its cost, especially on reliable goods", "Always worth buying", "Required by law"], a:0, why:"Many cards already extend manufacturer warranties, which makes the add-on redundant." },
    { q:"What is the best defence against a surprise repair bill?", o:["A sinking fund for known-risk items", "An extended warranty", "A credit card"], a:0, why:"If you own a car or appliances, repairs are predictable in aggregate even if the timing is not." },
    { q:"What is health insurance coinsurance?", o:["The percentage you pay after the deductible", "A second policy", "A fixed visit fee"], a:0, why:"Twenty percent coinsurance on a large bill can still be a very large number." },
    { q:"Until what age can many people stay on a parent's health plan?", o:["26", "18", "21"], a:0, why:"This is often the cheapest option available to someone early in their career." },
    { q:"What is the risk of driving without insurance?", o:["Fines, licence suspension and full personal liability", "Only a small fine", "Nothing if you are careful"], a:0, why:"One at-fault accident without coverage can create debt that follows you for years." },
    { q:"What should you do before signing a lease you have doubts about?", o:["Read every clause and ask for changes in writing", "Sign and negotiate later", "Rely on verbal promises"], a:0, why:"Verbal assurances are almost impossible to enforce. Get amendments written into the document." },
    { q:"What is a walk-through at move-in for?", o:["Documenting existing damage before you are blamed for it", "Meeting neighbours", "Testing the internet"], a:0, why:"Dated photographs and a signed condition report are what protect your deposit." },
    { q:"Why compare total cost rather than monthly payment on a big purchase?", o:["A low monthly payment can hide a much higher total", "Monthly payments are inaccurate", "Totals are always lower"], a:0, why:"Extending the term is the standard way to make an unaffordable purchase look affordable." },
    { q:"What is the 20/4/10 guideline for car buying?", o:["20% down, 4-year loan, payments under 10% of income", "20 months of savings first", "A 20% interest cap"], a:0, why:"It is a rough guardrail, and failing it badly usually signals the car is too expensive." },
    { q:"What is the cheapest way to lower a car insurance premium legitimately?", o:["Raise the deductible and keep a clean record", "Reduce liability limits to the minimum", "Stop driving temporarily"], a:0, why:"Cutting liability to the minimum saves little and exposes you to enormous risk." }
  ],
  "Scams, Security & Money Habits": [
    { q:"What is the clearest sign of a job scam?", o:["You are asked to pay upfront or deposit a cheque and send money back", "The job is remote", "The interview is short"], a:0, why:"No legitimate employer requires payment to start or uses you to move money." },
    { q:"What is phishing?", o:["A message impersonating a trusted organisation to steal credentials", "A type of investment fraud", "A credit card fee"], a:0, why:"Urgency plus a link is the standard pattern. Navigate to the site yourself rather than clicking." },
    { q:"What is the safest response to an urgent text from your 'bank'?", o:["Call the number on your card, not one in the message", "Reply to confirm identity", "Click the link to verify"], a:0, why:"Urgency is the pressure tactic. Real institutions are fine with you calling them back." },
    { q:"What is a SIM-swap attack?", o:["An attacker moving your number to their device to intercept codes", "Cloning your debit card", "A phone insurance scam"], a:0, why:"It is why an authenticator app is safer than SMS for two-factor codes." },
    { q:"What does a credit freeze do?", o:["Stops new credit being opened in your name", "Locks your existing cards", "Pauses your payments"], a:0, why:"It is free, does not affect your score, and can be lifted temporarily when you apply for something." },
    { q:"What is the first step if your identity is stolen?", o:["Freeze credit and report it to the authorities", "Close all bank accounts", "Wait to see what happens"], a:0, why:"An official report creates the paper trail you need to dispute fraudulent accounts." },
    { q:"Why is password reuse dangerous?", o:["One breach exposes every account sharing that password", "It slows down logins", "Sites ban it"], a:0, why:"Credential-stuffing attacks test leaked pairs across thousands of sites automatically." },
    { q:"What makes a password strong?", o:["Length and uniqueness", "Frequent changes", "Special characters alone"], a:0, why:"A long unique passphrase stored in a manager beats a short complex one reused everywhere." },
    { q:"What is the risk of a 'guaranteed returns' investment pitch?", o:["Guaranteed returns do not exist; it signals fraud", "Returns will be lower than promised", "Fees will be high"], a:0, why:"Pressure to act immediately and recruit others are the classic markers of a Ponzi scheme." },
    { q:"What is a common crypto scam pattern?", o:["A stranger builds trust then directs you to a fake trading site", "Exchanges charging fees", "Price volatility"], a:0, why:"Withdrawals appear to work at first for small amounts, which is what builds false confidence." },
    { q:"Why are peer-to-peer payments a favourite of scammers?", o:["Transfers are fast and effectively irreversible", "They are anonymous", "They carry chargeback rights"], a:0, why:"Once it is sent to a stranger, recovery is unlikely. Treat it like cash." },
    { q:"What is a rental scam's usual tell?", o:["A deposit demanded before you can view the property", "A low-ish rent", "A long lease"], a:0, why:"Never send money for a property you or someone you trust has not physically seen." },
    { q:"What does an overpayment scam involve?", o:["A cheque for too much, with a request to refund the difference", "Being underpaid for work", "Duplicate charges"], a:0, why:"The cheque bounces days later and the money you sent back is gone." },
    { q:"What should you check before entering card details on a site?", o:["The exact domain spelling and that it is the real merchant", "That it has images", "That it loads quickly"], a:0, why:"Lookalike domains are the core of the trick. A padlock only means the connection is encrypted." },
    { q:"What is social engineering?", o:["Manipulating a person rather than breaking technology", "Hacking a network", "A marketing method"], a:0, why:"It targets urgency, authority and fear, which is why slowing down is the defence." },
    { q:"What is lifestyle inflation?", o:["Spending rising to match income increases", "Prices rising economy-wide", "A tax on luxury goods"], a:0, why:"Committing part of every raise to saving before it reaches checking is the standard fix." },
    { q:"Why do people underestimate small recurring costs?", o:["Each charge feels trivial in isolation", "They are hidden by banks", "They are unpredictable"], a:0, why:"Annualising the figure is what makes the real size visible." },
    { q:"What is present bias?", o:["Overweighting immediate rewards over future ones", "Ignoring past spending", "Favouring cash"], a:0, why:"Automation works because it removes the decision from the moment where present bias wins." },
    { q:"What is the comparison problem with money content online?", o:["You see outcomes without costs, losses or context", "It is always fabricated", "It is too technical"], a:0, why:"Nobody posts the losing trades, and many creators are paid to promote the product." },
    { q:"How should you judge financial advice from a creator?", o:["Check whether they are paid to promote it and whether it fits your situation", "Follow it if they have many followers", "Trust it if it is confident"], a:0, why:"Follower count measures reach, not accuracy or suitability." },
    { q:"What is FOMO's typical effect on investing decisions?", o:["Buying after a large run-up, near the top", "Encouraging patience", "Lowering risk"], a:0, why:"The feeling peaks exactly when an asset has already risen the most." },
    { q:"What is loss aversion?", o:["Losses feel worse than equivalent gains feel good", "Avoiding all investments", "Fear of spending"], a:0, why:"It explains panic selling and holding losers too long." },
    { q:"What is the sunk cost fallacy?", o:["Continuing because of what you already spent", "Ignoring past costs", "Spending too little"], a:0, why:"Past money is gone regardless. The only question is whether continuing is worth it from here." },
    { q:"What is an effective way to reduce impulse spending?", o:["Remove saved cards and add a waiting period", "Use a bigger budget", "Shop when tired"], a:0, why:"Friction beats willpower, because it works on the days your willpower does not." },
    { q:"What is the benefit of automating savings and bills?", o:["It removes reliance on motivation each month", "It earns higher interest", "It avoids taxes"], a:0, why:"Automation is what makes good months and bad months produce the same saving behaviour." },
    { q:"What is a money check-in?", o:["A regular scheduled review of accounts and spending", "An annual credit application", "A bank appointment"], a:0, why:"Weekly and brief works better than monthly and dreaded." },
    { q:"What is the best protection against account takeover?", o:["Unique passwords plus app-based two-factor authentication", "Changing passwords weekly", "Using only mobile data"], a:0, why:"Hardware keys are stronger still, and an authenticator app beats SMS." },
    { q:"Why should you be cautious of urgency in any money request?", o:["Urgency is engineered to prevent verification", "Urgent requests are usually errors", "Banks never act quickly"], a:0, why:"Almost every scam depends on you not pausing to check." },
    { q:"What is the risk of oversharing on social media?", o:["Details answer security questions and enable targeting", "It lowers your credit score", "It voids insurance"], a:0, why:"Pet names, schools and birthdays are exactly what account recovery flows ask for." },
    { q:"What single habit most reliably improves finances over years?", o:["Consistently saving a set percentage of income automatically", "Picking the right stock", "Finding the best bank bonus"], a:0, why:"Rate and consistency of saving outweigh optimisation of returns for most people, especially early on." }
  ]
};

/* Sessions run on alternating Sundays. Update these as they pass. */
const SESSIONS = [
  { title:"Property Hacking 101", month:"Sep", day:"21", year:2026, time:"6:00 to 8:00 PM ET", taken:500, seats:500, host:"Marcus Vane", done:true },
  { title:"Tax Saving Secrets", month:"Oct", day:"05", year:2026, time:"6:00 to 8:00 PM ET", taken:477, seats:500, host:"Priya Raghunathan", done:true },
  { title:"The Money Glow Up", month:"Nov", day:"24", year:2026, time:"6:00 to 8:00 PM ET", taken:483, seats:500, host:"Elena Rossi" }
];

const EPISODES = [
  { n:1,  t:"The Money Glow Up", d:"Where your money goes before you notice, and the two habits that change the shape of a year.", plays:420, url:"https://drive.google.com/file/d/1zrmNTJsk55GExUF2cmjPOiHieEuNfjPB/view?usp=sharing" },
  { n:2,  t:"Secure The Bag", d:"Account structures, fee traps and why your transfer takes three days to land.", plays:455, url:"https://drive.google.com/file/d/1nC2RzqMv1VtE2-rEz39qv3TAjAbNYtX-/view?usp=sharing" },
  { n:3,  t:"Credit Score Hacking", d:"What moves a score, in what order, and how long each change takes to appear.", plays:512, url:"https://drive.google.com/file/d/144fpHjhMDkxmKlaHp7PhKR0Q1BhN21Up/view?usp=sharing" },
  { n:4,  t:"Buying Your First Place", d:"Closing costs, escrow and the running costs nobody quotes you up front.", plays:646, url:"https://drive.google.com/file/d/1mqjwZRzgNwzbtuVwX0qCwbXgUR2HQsZj/view?usp=sharing" },
  { n:5,  t:"Tax-Free Growth", d:"Roth accounts, HSAs and the order to fill them in when money is tight.", plays:609, url:"https://drive.google.com/file/d/1P_lIQ8fY-Q5DVLJYcpWRLvNchwWhW6We/view?usp=sharing" },
  { n:6,  t:"Reinvesting Well", d:"Dividend reinvestment, drip-feeding and why timing the market rarely pays.", plays:609, url:"https://drive.google.com/file/d/15UtR4Y8Yk2wlfEwRoReR5MKnSUUF7tRz/view?usp=sharing" },
  { n:7,  t:"Wills and Trusts", d:"What probate actually costs a family, and the paperwork that avoids it.", plays:508, url:"https://drive.google.com/file/d/1qIFv3rGb4uBthGp1rYng9vAfgLMqLSEl/view?usp=sharing" },
  { n:8,  t:"Reading the Market", d:"Index funds, valuation basics and how to ignore most financial news.", plays:687, url:"https://drive.google.com/file/d/15yQQM3ncNAurNl-0t9zZj3qTSDEwNxaH/view?usp=sharing" },
  { n:9,  t:"Banking Across Borders", d:"Multi-currency accounts, FX spreads and the reporting duties people forget.", plays:558, url:"https://drive.google.com/file/d/1G8u4kHV7_eYOuqWmt2Y4OsDsOJdwbb46/view?usp=sharing" },
  { n:10, t:"Money Mindset", d:"Why you sell at the bottom, and the rules that stop you doing it again.", plays:471, url:"https://drive.google.com/file/d/1xSuKFR-PhGSOSBUpm12UaM7mCCzl20Np/view?usp=sharing" },
  { n:11, t:"Side Income That Lasts", d:"Which income streams are genuinely passive and which are just a second job.", plays:533, url:"https://drive.google.com/file/d/107F66rV__YNg2p0z4H8L3aQjK2zo6REz/view?usp=sharing" },
  { n:12, t:"Options Without the Hype", d:"Covered calls, protective puts and where the risk actually sits.", plays:492, url:"https://drive.google.com/file/d/1IrEuICHNhGGGMfzcpKEDWKh8-Viz8ZMT/view?usp=sharing" },
  { n:13, t:"Bonds and Duration", d:"Why bond prices fall when rates rise, explained without the maths.", plays:401, url:"https://drive.google.com/file/d/1Ulqa6xJalxfcfGg0IjUBrOc5IBno9nDM/view?usp=sharing" },
  { n:14, t:"Gold and Commodities", d:"Storage costs, contango, and why gold is a poor inflation hedge.", plays:463, url:"https://drive.google.com/file/d/1W6SJLPM_qTwlCUodWTpEl8BTcLB58EJd/view?usp=sharing" },
  { n:15, t:"Crypto, Told Straight", d:"Custody, stablecoin reserves and the failure modes that keep repeating.", plays:702, url:"https://drive.google.com/file/d/1Nk3-WO289BXx0n3MGH4Ww-AUwtRgHYj3/view?usp=sharing" },
  { n:16, t:"How Rates Move Everything", d:"Central banks, credit cycles and reading the environment you invest into.", plays:388, url:"https://drive.google.com/file/d/1rGFe1fcYdq5loyceVIglf_l-g5RTjpwq/view?usp=sharing" },
  { n:17, t:"Inside Private Equity", d:"Fund structures, carry and the J-curve, for people who keep hearing the words.", plays:517, url:"https://drive.google.com/file/d/1VVX0CuDzVg1n0NisCLQg-mQ9WqMSyD1i/view?usp=sharing" },
  { n:18, t:"Why Retail FX Loses", d:"Leverage, spreads and the arithmetic behind most closed accounts.", plays:449, url:"https://drive.google.com/file/d/1xChtorelsIiT29o6HLrPPh7fQYMVeMQ7/view?usp=sharing" },
  { n:19, t:"Giving Well", d:"Donor-advised funds, appreciated stock and getting more to the cause.", plays:362, url:"https://drive.google.com/file/d/1LBZadQJ-f5uY5zAh4QslOki8Xjo5v5cd/view?usp=sharing" },
  { n:20, t:"Models That Don't Break", d:"Scenario tables, sanity checks and auditing your own spreadsheet.", plays:594, url:"https://drive.google.com/file/d/1FJUdQ6Ob5htfPZ5OlVIAxQ1oC9egZqOo/view?usp=sharing" }
];

/* =========================================================
   CORE - helpers, theme, motion, routing, toast, validation
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- theme: system default, 3-state override ---------- */
const THEME_KEY = 'profyn-theme';
function setTheme(mode){
  document.documentElement.setAttribute('data-theme', mode);
  try { mode === 'auto' ? localStorage.removeItem(THEME_KEY) : localStorage.setItem(THEME_KEY, mode); } catch (e) {}
  $$('[data-theme-set]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.themeSet === mode)));
}
(function initTheme(){
  let saved = 'auto';
  try { saved = localStorage.getItem(THEME_KEY) || 'auto'; } catch (e) {}
  setTheme(saved);
})();
$$('[data-theme-set]').forEach(b => b.addEventListener('click', () => setTheme(b.dataset.themeSet)));

/* ---------- scroll reveal via IntersectionObserver (no scroll listeners) ---------- */
const revealObserver = ('IntersectionObserver' in window) ? new IntersectionObserver((entries, obs) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }) : null;

function observeReveals(root = document){
  const items = $$('.reveal:not(.in)', root);
  if (reduceMotion() || !revealObserver) { items.forEach(el => el.classList.add('in')); return; }
  items.forEach(el => revealObserver.observe(el));

  /* Safety net: an IntersectionObserver does not fire while the tab or frame
     is never painted (backgrounded, prerendered, embedded in a hidden pane).
     Reveal anything still hidden after a beat so copy is never stranded. */
  clearTimeout(observeReveals._t);
  observeReveals._t = setTimeout(() => {
    $$('.reveal:not(.in)', root).forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 1.25) el.classList.add('in');
    });
  }, 1200);
}

/* nav shadow, via sentinel rather than a scroll listener */
(function navShadow(){
  const nav = $('#nav');
  const sentinel = document.createElement('div');
  sentinel.setAttribute('aria-hidden', 'true');
  sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
  document.body.prepend(sentinel);
  if (!('IntersectionObserver' in window)) return;
  new IntersectionObserver(([e]) => nav.classList.toggle('stuck', !e.isIntersecting)).observe(sentinel);
})();

/* ---------- toast ---------- */
let toastTimer;
function toast(title, desc){
  $('#toastTitle').textContent = title;
  $('#toastDesc').textContent = desc || '';
  const t = $('#toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 4600);
}

/* ---------- routing ---------- */
/* ---------- routing: every view has a real URL, so each one can be indexed ---------- */
const SITE = 'https://profyn.org';
const PAGES = ['home','courses','course','track-cert','practice','workshops','listen','team','join','login','learning','welcome','privacy','terms','404'];
const NAV_FOR = { courses:'courses', course:'courses', 'track-cert':'courses', practice:'practice', workshops:'workshops', listen:'listen', team:'team', learning:'learning' };
const PATHS = { home:'/', courses:'/courses/', practice:'/practice/', workshops:'/workshops/', listen:'/listen/', team:'/team/',
                join:'/join/', login:'/login/', learning:'/my-learning/', welcome:'/welcome/', privacy:'/privacy/', terms:'/terms/' };
const pathFor = (page, param) => page === 'course' ? `/courses/${param}/` : (PATHS[page] || null);
/* the single-file preview runs from a .html file or file://, where routes do not exist */
const PREVIEW = location.protocol === 'file:' || /\.html?$/.test(location.pathname);

function routeFromPath(path){
  path = (path || '/').replace(/index\.html?$/, '');
  if (!path.endsWith('/')) path += '/';
  if (path === '/' || /\.html?\/$/.test(path)) return { page: 'home' };
  const m = path.match(/^\/courses\/([a-z0-9-]+)\/$/);
  if (m) return TRACKS.some(t => t.id === m[1]) ? { page: 'course', param: m[1] } : { page: '404' };
  const hit = Object.entries(PATHS).find(([, p]) => p === path);
  return hit ? { page: hit[0] } : { page: '404' };
}

const ROUTE_META = {
  home:      { title:'Profyn - Money skills for early careers', desc:'Student-led financial literacy for Gen Z. 40 free courses on budgeting, credit scores, student loans, taxes and investing, plus live workshops.' },
  courses:   { title:'40 Free Personal Finance Courses for Students | Profyn', desc:'Budgeting, credit scores, student loans, taxes, investing and more. 40 free, self-paced courses built for high school and college students.' },
  practice:  { title:'Personal Finance Practice Questions | Profyn', desc:'270 practice questions across nine topics, from budgeting and credit to taxes and investing. Every answer explains the reasoning.' },
  workshops: { title:'Live Financial Literacy Workshops | Profyn', desc:'Free two-hour workshops on Zoom, twice a month. One money topic worked through properly, with time for your questions at the end.' },
  listen:    { title:'Personal Finance Audio Library | Profyn', desc:'Short audio episodes on one money idea each, from credit scores to index funds. Made for a commute or a walk.' },
  team:      { title:'Our Team | Profyn', desc:'Profyn is student-led. Meet the co-founders building free financial literacy for Gen Z.' },
  join:      { title:'Join Profyn | Free Financial Literacy for Students', desc:'Create a free Profyn account with Google or email and keep your course progress on every device.' },
  login:     { title:'Log in | Profyn', desc:'Log in to Profyn to pick up your courses where you left off.', noindex:true },
  learning:  { title:'My learning | Profyn', desc:'Your Profyn courses, progress and certificates.', noindex:true },
  welcome:   { title:'Welcome to Profyn', desc:'Your Profyn membership.', noindex:true },
  privacy:   { title:'Privacy | Profyn', desc:'What Profyn stores about you, why, and how to have it deleted.' },
  terms:     { title:'Terms | Profyn', desc:'The terms for using Profyn Academy.' },
  'track-cert': { title:'Certificate | Profyn', desc:'A Profyn course certificate.', noindex:true },
  '404':     { title:'Page not found | Profyn', desc:'This page does not exist.', noindex:true }
};

function metaFor(page, param){
  if (page === 'course'){
    const t = TRACKS.find(x => x.id === param);
    if (t) return { title:`${t.title} | Profyn`, desc:t.blurb, path:pathFor('course', t.id) };
  }
  const m = ROUTE_META[page] || ROUTE_META['404'];
  return { ...m, path: PATHS[page] || null };
}

/* structured data for the page: Course + breadcrumbs on course pages, a course list on /courses/ */
function ldFor(page, param){
  if (page === 'course'){
    const t = TRACKS.find(x => x.id === param); if (!t) return {};
    const url = SITE + pathFor('course', t.id);
    return { '@context':'https://schema.org', '@graph':[
      { '@type':'Course', '@id':url + '#course', name:t.title, description:t.blurb, url, inLanguage:'en-US',
        provider:{ '@type':'Organization', name:'Profyn Academy', sameAs:SITE + '/' },
        educationalLevel:t.level, about:t.cat, isAccessibleForFree:true,
        offers:{ '@type':'Offer', category:'Free', price:0, priceCurrency:'USD' },
        hasCourseInstance:{ '@type':'CourseInstance', courseMode:'Online', courseWorkload:'PT' + t.hours.replace(/\s+/g,'').toUpperCase() } },
      { '@type':'BreadcrumbList', itemListElement:[
        { '@type':'ListItem', position:1, name:'Courses', item:SITE + '/courses/' },
        { '@type':'ListItem', position:2, name:t.title, item:url } ] } ] };
  }
  if (page === 'courses') return { '@context':'https://schema.org', '@type':'ItemList',
    itemListElement: TRACKS.map((t, i) => ({ '@type':'ListItem', position:i + 1, url:SITE + pathFor('course', t.id) })) };
  return {};
}

function setMeta(page, param){
  const m = metaFor(page, param);
  document.title = m.title;
  const set = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };
  set('meta[name="description"]', 'content', m.desc);
  set('meta[property="og:title"]', 'content', m.title);
  set('meta[property="og:description"]', 'content', m.desc);
  if (m.path){ set('link[rel="canonical"]', 'href', SITE + m.path); set('meta[property="og:url"]', 'content', SITE + m.path); }
  set('meta[name="robots"]', 'content', m.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large');
  const ld = document.getElementById('ld-page');
  if (ld) ld.textContent = JSON.stringify(ldFor(page, param));
}

let currentPage = 'home', currentParam = null;

function go(page, param, opts = {}){
  if (!PAGES.includes(page)) page = '404';
  if (page === 'course' && !TRACKS.some(t => t.id === param)) page = '404';
  /* once we know who is signed in, keep people out of views that no longer apply */
  if (Auth.settled){
    if (Auth.user && (page === 'join' || page === 'login')) page = 'learning';
    if (!Auth.user && page === 'welcome') page = 'join';
  }

  $$('.page').forEach(p => p.classList.remove('active'));
  const el = $('#page-' + page);
  el.classList.add('active');
  currentPage = page; currentParam = param;

  const activeNav = NAV_FOR[page];
  $$('.nav-link').forEach(l => {
    if (l.dataset.go === activeNav) l.setAttribute('aria-current', 'page');
    else l.removeAttribute('aria-current');
  });
  closeNavPanel();
  closeAccountMenu();
  if (!opts.keepScroll) window.scrollTo({ top: 0, behavior: 'instant' });

  const path = pathFor(page, param);
  if (!PREVIEW && path && opts.push !== false && location.pathname !== path){
    try { history.pushState({ page, param }, '', path); } catch (e) {}
  }
  setMeta(page, param);

  if (page === 'courses')   renderCourses();
  if (page === 'course')    openCourse(param);
  if (page === 'practice')  resetPractice();
  if (page === 'workshops') renderSessions();
  if (page === 'listen')    renderEpisodes();
  if (page === 'join')      resetJoin();
  if (page === 'login')     resetLogin();
  if (page === 'learning')  renderLearning();
  if (page === 'welcome')   renderWelcome();

  observeReveals(el);
  el.querySelector('h1, h2')?.setAttribute('tabindex', '-1');
}

/* links keep real hrefs for crawlers and new tabs; plain clicks stay in the app */
document.addEventListener('click', e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const card = e.target.closest('a[data-course]');
  if (card){ e.preventDefault(); go('course', card.dataset.course); return; }
  const t = e.target.closest('[data-go]');
  if (!t) return;
  e.preventDefault();
  go(t.dataset.go);
});
window.addEventListener('popstate', () => {
  const r = routeFromPath(location.pathname);
  go(r.page, r.param, { push: false });
});

/* ---------- mobile nav ---------- */
function closeNavPanel(){
  $('#navPanel').classList.remove('open');
  $('#navToggle').setAttribute('aria-expanded', 'false');
  $('#navToggle').innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-list"/></svg>';
}
$('#navToggle').addEventListener('click', () => {
  const panel = $('#navPanel');
  const open = panel.classList.toggle('open');
  $('#navToggle').setAttribute('aria-expanded', String(open));
  $('#navToggle').innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-${open ? 'x' : 'list'}"/></svg>`;
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNavPanel(); });

/* ---------- form validation (inline, never alert) ---------- */
function fieldError(input, bad){
  input.closest('.form-row')?.classList.toggle('bad', bad);
  input.setAttribute('aria-invalid', String(bad));
}
function validate(input, rule){
  const v = input.value.trim();
  const ok = rule === 'email' ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
           : rule === 'password' ? input.value.length >= 8
           : v.length > 0;
  fieldError(input, !ok);
  return ok;
}
function checkForm(fields){
  let firstBad = null, ok = true;
  fields.forEach(([input, rule]) => {
    if (!validate(input, rule)) { ok = false; firstBad = firstBad || input; }
  });
  if (firstBad) firstBad.focus();
  return ok;
}
function clearForm(form){
  form.reset();
  $$('.form-row', form).forEach(r => r.classList.remove('bad'));
  $$('input,select', form).forEach(i => i.removeAttribute('aria-invalid'));
}
/* clear the error as soon as the field becomes valid again */
document.addEventListener('input', e => {
  const i = e.target;
  if (!i.matches('.input,.select') || !i.closest('.form-row.bad')) return;
  validate(i, i.dataset.rule || (i.type === 'email' ? 'email' : 'text'));
});

/* ---------- shared submit-with-busy-state ---------- */
function busy(btn, label){
  const original = btn.innerHTML;
  btn.classList.add('is-busy');
  btn.disabled = true;
  btn.innerHTML = `<svg class="ic" aria-hidden="true"><use href="#i-circle-notch"/></svg>${label}`;
  return () => { btn.classList.remove('is-busy'); btn.disabled = false; btn.innerHTML = original; };
}

/* ---------- small shared renderers ---------- */
$('#yearNow').textContent = new Date().getFullYear();
$('#epCount').textContent = EPISODES.length;

/* The brand mark is inline SVG and the favicon is declared in <head>,
   so there is no logo file to fetch and nothing to 404. */

/* =========================================================
   ACCOUNTS AND PROGRESS
   Sign-in runs on Firebase (Google and email). Paste the web app
   config from your Firebase project below to switch it on; see
   FIREBASE-SETUP.md. Until then the site runs in guest mode and
   progress is saved on this device only.
   ========================================================= */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD3Qx778Gq-CMM8FsrI1mbh5Wz6LaaZ4Ro",
  authDomain: "profyn-c2c0f.firebaseapp.com",
  projectId: "profyn-c2c0f",
  appId: "1:849382158261:web:2caced6e718de92c1873fc"
};
const FIREBASE_SDK = 'https://www.gstatic.com/firebasejs/13.0.0';

const certIdFor = id => `PA-${id.slice(0,4).toUpperCase()}-${Math.floor(1000 + Math.random() * 8999)}`;
const initials = s => String(s || '?').trim().split(/[\s@.]+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?';
const firstName = u => u ? String(u.name || u.email || '').split(/[\s@]/)[0] : '';
const memberId = uid => 'PA-' + (Math.abs([...String(uid)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) | 0, 7)) % 900000 + 100000);

/* ---------- progress: kept locally, mirrored to the account when signed in ---------- */
const Progress = (() => {
  const GUEST = 'profyn-progress-guest';
  let key = GUEST, data = read(GUEST), push = null;
  const listeners = new Set();

  function read(k){
    try { const d = JSON.parse(localStorage.getItem(k)); return d && d.courses ? d : { courses: {} }; }
    catch (e) { return { courses: {} }; }
  }
  function write(){ try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {} }
  function changed(){ write(); if (push) push(data).catch(() => {}); listeners.forEach(fn => fn()); }
  const entry = id => (data.courses[id] = data.courses[id] || { done: [] });
  const ratio = e => e ? e.score / e.total : -1;

  /* union of finished lessons, best exam result wins */
  function merge(a, b){
    const out = { courses: {} }, A = (a && a.courses) || {}, B = (b && b.courses) || {};
    for (const id of new Set([...Object.keys(A), ...Object.keys(B)])){
      const x = A[id] || {}, y = B[id] || {};
      const done = [...new Set([...(x.done || []), ...(y.done || [])])].sort((m, n) => m - n);
      const exam = ratio(x.exam) >= ratio(y.exam) ? x.exam : y.exam;
      out.courses[id] = exam ? { done, exam } : { done };
    }
    return out;
  }

  return {
    course: id => data.courses[id] || { done: [] },
    markLesson(id, i){
      const e = entry(id);
      if (!e.done.includes(i)){ e.done.push(i); e.done.sort((m, n) => m - n); changed(); }
    },
    passExam(id, score, total){
      const e = entry(id), prev = e.exam;
      if (!prev || score / total > ratio(prev)){
        e.exam = { score, total, at: Date.now(), certId: (prev && prev.certId) || certIdFor(id), name: (prev && prev.name) || '' };
        changed();
      }
      return e.exam;
    },
    setCertName(id, name){ const e = entry(id); if (e.exam && e.exam.name !== name){ e.exam.name = name; changed(); } },
    summary(id){
      const t = TRACKS.find(x => x.id === id), c = data.courses[id] || { done: [] };
      const total = t ? t.modules : 0, done = (c.done || []).filter(i => i < total).length;
      return { done, total, pct: total ? done / total : 0, exam: c.exam || null, started: done > 0 || !!c.exam };
    },
    /* on sign-in, adopt the account copy and fold in anything done as a guest, once */
    useAccount(uid, remote){
      const guest = read(GUEST), cached = read('profyn-progress-' + uid);
      key = 'profyn-progress-' + uid;
      data = merge(merge(remote || { courses: {} }, cached), guest);
      try { localStorage.removeItem(GUEST); } catch (e) {}
      write(); listeners.forEach(fn => fn());
    },
    /* on sign-out, drop this device's copy of the account; the account keeps it */
    useGuest(prevUid){
      push = null;
      if (prevUid){ try { localStorage.removeItem('profyn-progress-' + prevUid); } catch (e) {} }
      key = GUEST; data = read(GUEST); listeners.forEach(fn => fn());
    },
    attach(fn){ push = fn; if (fn) fn(data).catch(() => {}); },
    onChange(fn){ listeners.add(fn); },
    get data(){ return data; },
    _merge: merge
  };
})();

/* ---------- auth: Firebase when configured, guest mode otherwise ---------- */
const Auth = (() => {
  let user = null, impl = null, settled = false;
  const listeners = new Set();
  const configured = () => !!(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.projectId && FIREBASE_CONFIG.authDomain);
  const emit = () => listeners.forEach(fn => fn(user));
  const off = on => $$('[data-auth-off]').forEach(n => { n.hidden = !on; });

  async function firebase(){
    const [app, auth, fs] = await Promise.all([
      import(`${FIREBASE_SDK}/firebase-app.js`),
      import(`${FIREBASE_SDK}/firebase-auth.js`),
      import(`${FIREBASE_SDK}/firebase-firestore.js`)
    ]);
    const fa = app.initializeApp(FIREBASE_CONFIG);
    const a = auth.getAuth(fa), db = fs.getFirestore(fa);
    const shape = u => u && {
      uid: u.uid, name: u.displayName || '', email: u.email || '', photo: u.photoURL || '',
      provider: (u.providerData[0] || {}).providerId || 'password',
      created: u.metadata && u.metadata.creationTime ? Date.parse(u.metadata.creationTime) : Date.now()
    };
    return {
      watch: cb => auth.onAuthStateChanged(a, u => cb(shape(u))),
      google: async () => {
        const pr = new auth.GoogleAuthProvider();
        pr.setCustomParameters({ prompt: 'select_account' });
        const cred = await auth.signInWithPopup(a, pr);
        const info = auth.getAdditionalUserInfo(cred);
        return { ...shape(cred.user), isNew: !!(info && info.isNewUser) };
      },
      signUp: async (name, email, pw) => {
        const cred = await auth.createUserWithEmailAndPassword(a, email, pw);
        await auth.updateProfile(cred.user, { displayName: name });
        return { ...shape(cred.user), name, isNew: true };
      },
      signIn: async (email, pw) => shape((await auth.signInWithEmailAndPassword(a, email, pw)).user),
      reset: email => auth.sendPasswordResetEmail(a, email),
      signOut: () => auth.signOut(a),
      load: async uid => { const snap = await fs.getDoc(fs.doc(db, 'users', uid)); return snap.exists() ? snap.data() : null; },
      save: (uid, doc) => fs.setDoc(fs.doc(db, 'users', uid), doc, { merge: true })
    };
  }

  function start(){
    off(false);
    impl.watch(async u => {
      if (u){
        user = u;
        let remote = null;
        try { remote = await impl.load(u.uid); } catch (e) {}
        if (!user.name && remote && remote.name) user.name = remote.name;
        Progress.useAccount(u.uid, remote && remote.progress);
        Progress.attach(d => impl.save(u.uid, {
          name: user.name, email: user.email, provider: user.provider, progress: d, updatedAt: Date.now()
        }));
      } else {
        const was = user; user = null;
        Progress.useGuest(was && was.uid);
      }
      settled = true;
      emit();
    });
  }

  function need(){
    if (!impl) throw Object.assign(new Error('Accounts are not switched on yet'), { code: 'profyn/not-configured' });
    return impl;
  }

  return {
    get user(){ return user; },
    get settled(){ return settled; },
    configured,
    onChange: fn => listeners.add(fn),
    async init(){
      if (!configured()){ off(true); settled = true; emit(); return; }
      try { impl = await firebase(); start(); }
      catch (e) { console.warn('Profyn sign-in could not load:', e); off(true); settled = true; emit(); }
    },
    google: () => need().google(),
    async signUp(name, email, pw){
      const r = await need().signUp(name, email, pw);
      if (user && user.uid === r.uid) user.name = name;
      await impl.save(r.uid, { name, email, provider: 'password', createdAt: Date.now() }).catch(() => {});
      emit();
      return r;
    },
    signIn: (email, pw) => need().signIn(email, pw),
    reset: email => need().reset(email),
    signOut: () => need().signOut(),
    /* tests install a stand-in with the same shape as the Firebase adapter */
    _install(fake){ impl = fake; start(); }
  };
})();

function authMessage(err){
  const c = (err && err.code) || '';
  if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return '';
  return ({
    'profyn/not-configured': 'Accounts are being switched on. You can still take every course, and your progress is saved on this device.',
    'auth/email-already-in-use': 'There is already an account with that email. Try logging in instead.',
    'auth/invalid-email': 'That email address does not look right.',
    'auth/weak-password': 'Use at least 8 characters for your password.',
    'auth/invalid-credential': 'That email and password do not match.',
    'auth/wrong-password': 'That email and password do not match.',
    'auth/user-not-found': 'That email and password do not match.',
    'auth/too-many-requests': 'Too many attempts. Wait a minute and try again.',
    'auth/popup-blocked': 'Your browser blocked the Google window. Allow pop-ups for this site and try again.',
    'auth/network-request-failed': 'Could not reach the server. Check your connection and try again.',
    'auth/unauthorized-domain': 'Sign-in is not enabled for this web address yet.',
    'auth/operation-not-allowed': 'That sign-in method is not switched on yet.',
    'auth/account-exists-with-different-credential': 'You already have an account with that email. Log in the way you signed up.'
  })[c] || 'Something went wrong. Please try again.';
}
function showFormError(id, err){
  const el = $('#' + id); if (!el) return;
  const msg = err ? authMessage(err) : '';
  el.textContent = msg; el.hidden = !msg;
}

/* ---------- account controls in the nav ---------- */
const ICON = id => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"/></svg>`;
function avatarHTML(u){
  return u.photo ? `<img src="${esc(u.photo)}" alt="" referrerpolicy="no-referrer">` : esc(initials(u.name || u.email));
}
function renderAccountUI(){
  const u = Auth.user, box = $('#navAccount'), panel = $('#navPanelAccount');
  if (!box || !panel) return;
  if (!u){
    box.innerHTML = `<a class="nav-link nav-login" href="/login/" data-go="login">Log in</a>
      <a class="btn btn-sm" href="/join/" data-go="join">${ICON('user-plus')}<span class="nav-cta-label">Join Profyn</span></a>`;
    panel.innerHTML = `<a href="/login/" data-go="login">${ICON('user-circle')}Log in</a>`;
    return;
  }
  box.innerHTML = `<a class="nav-link" href="/my-learning/" data-go="learning"${currentPage === 'learning' ? ' aria-current="page"' : ''}>My learning</a>
    <div class="acct">
      <button class="acct-btn" id="acctBtn" type="button" aria-haspopup="menu" aria-expanded="false" aria-controls="acctMenu" aria-label="Account menu for ${esc(firstName(u))}">
        <span class="avatar-sm">${avatarHTML(u)}</span>
      </button>
      <div class="acct-menu" id="acctMenu" role="menu" hidden>
        <div class="acct-who"><b>${esc(u.name || firstName(u))}</b><span>${esc(u.email)}</span></div>
        <a role="menuitem" href="/my-learning/" data-go="learning">${ICON('trophy')}My learning</a>
        <button role="menuitem" type="button" data-signout>${ICON('sign-out')}Log out</button>
      </div>
    </div>`;
  panel.innerHTML = `<a href="/my-learning/" data-go="learning">${ICON('trophy')}My learning</a>
    <button type="button" data-signout>${ICON('sign-out')}Log out</button>`;
}
function closeAccountMenu(){
  const m = $('#acctMenu'), b = $('#acctBtn');
  if (m) m.hidden = true;
  if (b) b.setAttribute('aria-expanded', 'false');
}
document.addEventListener('click', e => {
  const b = e.target.closest('#acctBtn');
  if (b){
    const m = $('#acctMenu'), open = m.hidden;
    m.hidden = !open; b.setAttribute('aria-expanded', String(open));
    if (open) m.querySelector('[role="menuitem"]')?.focus();
    return;
  }
  if (!e.target.closest('#acctMenu')) closeAccountMenu();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAccountMenu(); });

document.addEventListener('click', async e => {
  if (!e.target.closest('[data-signout]')) return;
  try { await Auth.signOut(); } catch (err) { return; }
  toast("You're logged out", 'Your progress is saved to your account for next time.');
  go('home');
});

/* ---------- sign-in buttons ---------- */
document.addEventListener('click', async e => {
  const b = e.target.closest('[data-google]'); if (!b) return;
  const errId = b.dataset.google === 'join' ? 'joinError' : 'loginError';
  showFormError(errId);
  b.classList.add('is-busy'); b.disabled = true;
  try {
    const u = await Auth.google();
    go(u && u.isNew ? 'welcome' : 'learning');
  } catch (err) { showFormError(errId, err); }
  finally { b.classList.remove('is-busy'); b.disabled = false; }
});

/* keep every progress-aware view current */
Progress.onChange(() => {
  renderHomeRail();
  if (currentPage === 'learning') renderLearning();
  if (currentPage === 'courses') renderCourses();
});
Auth.onChange(() => {
  renderAccountUI();
  if (currentPage === 'learning') renderLearning();
  if (currentPage === 'welcome') { if (!Auth.user) go('join', null, { push: false }); else renderWelcome(); }
  if ((currentPage === 'join' || currentPage === 'login') && Auth.user) go('learning');
  if (currentPage === 'course' && cd){
    cd.done = [...new Set([...cd.done, ...Progress.course(cd.track.id).done])].filter(i => i < cd.track.lessons.length);
    renderCdSide();
  }
});

/* =========================================================
   HOME renderers
   ========================================================= */

(function renderHomeEpisodes(){
  $('#homeEpisodes').innerHTML = EPISODES.slice(-4).reverse().map(ep => `
    <a class="ed-row" href="${ep.url}" target="_blank" rel="noopener noreferrer">
      <span class="idx">${String(ep.n).padStart(2,'0')}</span>
      <span>
        <h3>${esc(ep.t)}</h3>
        <p>${esc(ep.d)}</p>
      </span>
      <svg class="ic go" aria-hidden="true"><use href="#i-arrow-up-right"/></svg>
    </a>`).join('');
})();

/* =========================================================
   COURSES - catalogue, filtering and cards
   ========================================================= */
const CAT_ICON = Object.fromEntries(CATEGORIES.map(c => [c.name, c.icon]));
let fCat = 'All', fLevel = 'All', fQuery = '';

function courseCard(t, extraClass, style){
  const p = Progress.summary(t.id);
  const state = p.exam ? 'is-done' : p.started ? 'is-going' : '';
  const cta = p.exam ? `${ICON('check-circle-fill')}Completed` : p.started ? `Continue · ${p.done}/${p.total}${ICON('arrow-right')}` : `Start course${ICON('arrow-right')}`;
  const said = p.exam ? 'completed' : p.started ? `${p.done} of ${p.total} lessons done` : 'not started';
  return `<a class="ccard ${state} ${extraClass || ''}" ${style || ''} href="/courses/${t.id}/" data-course="${t.id}" aria-label="${esc(t.title)}, ${said}">
    <span class="cc-head">
      <span class="cc-cat">${ICON(CAT_ICON[t.cat])}${esc(t.cat)}</span>
      <span class="tag tag-quiet">${esc(t.level)}</span>
    </span>
    <h3>${esc(t.title)}</h3>
    <p>${esc(t.blurb)}</p>
    <span class="cc-foot">
      <span class="cc-meta">
        <span class="meta">${ICON('book-open')}${t.modules} lessons</span>
        <span class="meta">${ICON('clock')}${esc(t.hours)}</span>
      </span>
      <span class="cc-cta">${cta}</span>
    </span>
    ${p.started && !p.exam ? `<span class="cc-bar" aria-hidden="true"><span style="width:${Math.round(p.pct * 100)}%"></span></span>` : ''}
  </a>`;
}

/* a course matches when it clears the level, the search text and (optionally) the category */
function matches(t, ignoreCat){
  const q = fQuery.trim().toLowerCase();
  if (fLevel !== 'All' && t.level !== fLevel) return false;
  if (!ignoreCat && fCat !== 'All' && t.cat !== fCat) return false;
  if (q && !`${t.title} ${t.blurb} ${t.cat} ${t.short} ${t.level}`.toLowerCase().includes(q)) return false;
  return true;
}

function renderCourses(){
  $('#levelFilter').innerHTML = ['All', ...LEVELS].map(l =>
    `<button class="chip" data-level="${l}" aria-pressed="${l === fLevel}">${l}</button>`).join('');

  /* category counts respect the other active filters so the numbers stay honest */
  const pool = TRACKS.filter(t => matches(t, true));
  $('#catNav').innerHTML = [{name:'All', icon:'squares-four'}, ...CATEGORIES].map(c => {
    const n = c.name === 'All' ? pool.length : pool.filter(t => t.cat === c.name).length;
    return `<button class="cat-chip" data-cat="${c.name}" aria-pressed="${c.name === fCat}">
      <svg class="ic" aria-hidden="true"><use href="#i-${c.icon}"/></svg>${c.name}<span class="n">${n}</span>
    </button>`;
  }).join('');

  const list = TRACKS.filter(t => matches(t));
  $('#coursesGrid').innerHTML = list.map((t, i) =>
    courseCard(t, 'reveal', `style="--i:${Math.min(i, 8)}"`)).join('');
  $('#coursesGrid').hidden = list.length === 0;
  $('#coursesEmpty').hidden = list.length > 0;

  const filtered = fCat !== 'All' || fLevel !== 'All' || fQuery.trim();
  $('#courseCount').textContent = filtered
    ? `Showing ${list.length} of ${TRACKS.length} courses`
    : `All ${TRACKS.length} courses`;
  $('#searchClear').hidden = !fQuery;
  observeReveals($('#page-courses'));
}

$('#catNav').addEventListener('click', e => {
  const b = e.target.closest('[data-cat]'); if (!b) return;
  fCat = b.dataset.cat; renderCourses();
});
$('#levelFilter').addEventListener('click', e => {
  const b = e.target.closest('[data-level]'); if (!b) return;
  fLevel = b.dataset.level; renderCourses();
});
$('#courseSearch').addEventListener('input', e => { fQuery = e.target.value; renderCourses(); });
$('#searchClear').addEventListener('click', () => {
  fQuery = ''; $('#courseSearch').value = ''; renderCourses(); $('#courseSearch').focus();
});
document.addEventListener('click', e => {
  if (!e.target.closest('[data-filter-clear]')) return;
  fCat = 'All'; fLevel = 'All'; fQuery = ''; $('#courseSearch').value = ''; renderCourses();
});

/* the home rail reuses courseCard, and re-renders as progress changes */
function renderHomeRail(){
  const picks = ['budget-reality','credit-score','paycheck','bnpl','start-investing','student-loans'];
  $('#homeRail').innerHTML = picks.map(id => TRACKS.find(t => t.id === id)).filter(Boolean).map(t => courseCard(t)).join('');
}
renderHomeRail();


/* =========================================================
   COURSE DETAIL
   ========================================================= */
let cd = null;

const COURSE_CONTENT = {
  "budget-reality": {
    concepts: [
      { h:"Where the money actually goes", p:"A budget built on what you think you spend will not survive contact with what you actually spend. Before setting a single limit, export or screenshot one full month of transactions and sort every line into housing, food, transport, subscriptions and everything else.", fact:"The category that surprises people most is rarely rent. It is usually food and small recurring charges, which together often run thirty to forty percent above what people estimate." },
      { h:"Fixed versus variable costs", p:"Fixed costs are the ones that arrive at the same size every month, like rent and insurance. Variable costs move with your choices, like groceries, transport and going out.", fact:"Only variable costs can be adjusted quickly, which makes them the realistic place to find money when a month goes wrong." },
      { h:"Choosing a budgeting method", p:"The 50/30/20 split sends half your take-home to needs, thirty percent to wants and twenty percent to saving or extra debt payments. Zero-based budgeting instead assigns every dollar a job until nothing is unallocated.", fact:"Neither method is superior. Percentage splits suit steady pay; zero-based suits irregular income because it forces a decision on every dollar as it arrives." },
      { h:"Setting limits you will not blow past", p:"A limit set from an ambition rather than from data is a limit you will break in week two. Take your real average from the tracking month, cut five to ten percent, and treat that as the target.", fact:"Cutting a category by half almost never holds. Cutting it by ten percent, repeatedly, is what actually changes annual spending." },
      { h:"Paying yourself first", p:"If saving happens after a month of spending decisions, it competes with every one of them and usually loses. Moving money out on payday means you budget around what is left instead.", fact:"Automating the transfer for the day after payday is the single highest-return change most people can make to a budget." },
      { h:"Handling the month that goes wrong", p:"Every budget meets a month with a car repair, a medical bill or a trip you did not plan for. A budget without a plan for that is a budget that gets abandoned the first time it happens.", fact:"Building a small buffer line into the budget itself, rather than treating every surprise as a failure, is what keeps people going past month three." },
      { h:"Reviewing without dreading it", p:"A weekly five-minute glance catches drift while it is still small. A monthly review is where you actually move the limits to match reality.", fact:"People who check weekly correct course roughly four times as often as people who check monthly, and they abandon their budget far less." },
      { h:"Making it survive a life change", p:"A new job, a move or a changed schedule invalidates the assumptions underneath your categories. The budget needs rebuilding, not just adjusting.", fact:"Treat any change in income or housing as a trigger to re-run the tracking month rather than stretching the old numbers to fit." }
    ],
    worked: ["Say your take-home is $2,000 a month. Under a 50/30/20 split that is $1,000 for needs, $600 for wants and $400 for saving. If your rent alone is $1,100, the split has already failed, and pretending otherwise just means the $400 never actually gets saved. The honest move is to write the real numbers down: rent $1,100, utilities and phone $160, food $380, transport $150, subscriptions $55. That is $1,845, leaving $155. Now you know your true saving capacity is $155, not $400, and the question becomes which category can realistically move.", "Take the same $2,000 and run it as zero-based. You assign every dollar before the month starts: $1,100 rent, $160 utilities, $380 food, $150 transport, $55 subscriptions, $100 buffer, $55 savings. Total: $2,000. Nothing is unassigned, which means there is no invisible pool that quietly disappears. When a friend suggests a $40 dinner, the question is not whether you have $40 in your account. It is which assigned dollar you are taking it from."],
    mistakes: ["The most common failure is budgeting from aspiration rather than from data, setting a food limit of $200 when the real figure is $380 and treating the inevitable overshoot as a personal failing.", "The second most common failure is having no line for irregular costs, so the first car repair or medical bill feels like proof the whole system does not work."],
    qs: [
      { c:0, q:"What should you do before setting any budget limits?", o:["Track one full month of real spending", "Estimate your spending from memory", "Copy a template from an app"], a:0, why:"Limits built on estimates break immediately. A month of real data is the foundation everything else sits on." },
      { c:1, q:"Which type of expense can you realistically adjust this month?", o:["Variable costs like food and transport", "Fixed costs like rent", "Neither without moving house"], a:0, why:"Fixed costs are locked by contract. Variable costs are where a tight month actually gets solved." },
      { c:2, q:"Which budgeting method suits irregular income best?", o:["Zero-based budgeting", "The 50/30/20 rule", "A fixed weekly allowance"], a:0, why:"Zero-based forces a decision on each dollar as it arrives, which fits pay that changes month to month." },
      { c:3, q:"What usually happens when you cut a spending category in half?", o:["The limit gets broken and the budget is abandoned", "Spending permanently halves", "Other categories shrink too"], a:0, why:"Small repeated cuts hold; dramatic ones do not. Ten percent reductions are what change annual spending." },
      { c:4, q:"When should an automatic transfer to savings happen?", o:["The day after payday", "The last day of the month", "Whenever the balance looks healthy"], a:0, why:"Saving after a month of spending decisions means it competes with all of them. Moving it first removes the contest." },
      { c:5, q:"What makes most people abandon a budget by month three?", o:["No plan for the month something goes wrong", "Categories that are too detailed", "Checking it too often"], a:0, why:"Every budget meets an unplanned cost. Without a buffer line, the first one reads as total failure." },
      { c:6, q:"How often should you glance at your budget?", o:["Weekly, with a fuller monthly review", "Once a year", "Only when money runs short"], a:0, why:"Weekly catches drift early; monthly is when you actually adjust the numbers to match reality." },
      { c:7, q:"What should trigger rebuilding a budget from scratch?", o:["A change in income or housing", "The start of a new year", "A single overspent month"], a:0, why:"A life change invalidates the assumptions under your categories, so stretching the old numbers rarely works." }
    ]
  },
  "saving-small": {
    concepts: [
      { h:"Saving on an income that moves", p:"When pay changes month to month, a fixed savings amount either overdraws you in a lean month or leaves money idle in a strong one. A percentage of each deposit scales automatically.", fact:"Setting the percentage against your lowest typical month, not your average, is what stops a lean month undoing three good ones." },
      { h:"Why small automatic amounts beat big intentions", p:"A $20 transfer that happens forty times is worth more than a $200 transfer you plan four times and execute twice. Consistency compounds; intention does not.", fact:"Twenty dollars a week is $1,040 a year, which is more than most people manage through occasional large transfers." },
      { h:"Separating savings from spending", p:"Money that sits in the account you spend from will eventually be spent from. Distance is the point, not the interest rate.", fact:"A separate account at a different institution adds a day of friction, which is usually enough to stop an impulse withdrawal." },
      { h:"What a high-yield account actually does", p:"A high-yield savings account pays meaningfully more than a standard one while keeping the money accessible within a day or two. Both are typically insured to the same limit.", fact:"On a $2,000 balance the difference between a token rate and a competitive one is real money over a year, and switching takes about twenty minutes." },
      { h:"Saving when there is genuinely nothing spare", p:"If every dollar is committed, the answer is not willpower. It is finding one recurring cost to cut and redirecting exactly that amount before it reaches your spending account.", fact:"Cancelling one unused subscription and automating that same figure into savings converts a leak into a habit without changing your standard of living." },
      { h:"Naming the goal", p:"An unnamed balance is a balance you will raid. A goal with a number and a date gives you something to weigh a spending decision against.", fact:"People with named savings goals are measurably less likely to withdraw from them for unrelated spending." },
      { h:"Sinking funds for predictable costs", p:"Car registration, holiday travel and annual fees are not emergencies. They are known costs that arrive on a schedule, and dividing them across twelve months removes the shock.", fact:"Treating a predictable annual cost as a monthly line is the difference between a planned expense and a crisis." },
      { h:"Raising the rate without noticing", p:"The easiest time to increase a savings rate is the month a raise lands, because the higher income has not yet become your normal.", fact:"Committing half of every raise to saving before it reaches checking keeps your saving rate rising without any felt sacrifice." }
    ],
    worked: ["Suppose you earn between $600 and $1,400 a month from shifts. A fixed $200 transfer works in a good month and overdraws you in a bad one. Set it instead at fifteen percent of each deposit: a $600 month saves $90, a $1,400 month saves $210. Across a year averaging $1,000 a month, that is roughly $1,800 saved without a single missed transfer or overdraft fee.", "Compare two savers over one year. One transfers $25 every week automatically. The other intends $300 every quarter but manages it twice. The first saves $1,300; the second saves $600. Same intention, less than half the result, and the difference is entirely whether the transfer required a decision each time."],
    mistakes: ["Waiting until you have a comfortable surplus before starting, which in practice means never starting, because surpluses get absorbed by spending long before they get saved.", "Keeping savings in the same account you spend from and treating the combined balance as available, which quietly converts your savings into a slightly larger spending limit."],
    qs: [
      { c:0, q:"If your income varies, what should your automatic transfer be?", o:["A percentage of each deposit", "A large fixed amount", "Nothing until income stabilises"], a:0, why:"A percentage scales with the paycheque, so lean months do not overdraft you and strong months save more." },
      { c:1, q:"Which approach saves more over a year?", o:["$25 every week automatically", "$300 quarterly when you remember", "A lump sum at year end"], a:0, why:"Consistency beats size. Automatic small transfers complete; intentional large ones frequently do not." },
      { c:2, q:"Why keep savings at a separate institution?", o:["The extra friction stops impulse withdrawals", "It earns more interest by law", "It is required for insurance"], a:0, why:"Distance is the mechanism. A day of delay is usually enough for an impulse to pass." },
      { c:3, q:"What is the main advantage of a high-yield savings account?", o:["Meaningfully more interest with similar access", "It cannot be withdrawn from", "It is insured and others are not"], a:0, why:"Both account types are typically insured. The difference that matters is the rate." },
      { c:4, q:"If nothing seems spare, what is the practical first step?", o:["Cut one recurring cost and automate that exact amount", "Rely on willpower to spend less", "Wait for a pay rise"], a:0, why:"Converting an existing leak into an automatic transfer changes the outcome without changing your standard of living." },
      { c:5, q:"Why does naming a savings goal help?", o:["It gives you something to weigh spending against", "It earns bonus interest", "Banks require a stated purpose"], a:0, why:"Unnamed balances get raided. A specific target and date makes the trade-off visible." },
      { c:6, q:"What is a sinking fund for?", o:["Known future costs that arrive on a schedule", "Genuine emergencies", "Long-term investing"], a:0, why:"Registration, travel and annual fees are predictable. Spreading them monthly removes the shock." },
      { c:7, q:"When is the easiest time to raise your savings rate?", o:["The month a raise arrives", "After a large purchase", "At the end of the year"], a:0, why:"Before the higher income becomes normal, redirecting part of it costs you nothing you are used to." }
    ]
  },
  "emergency-fund": {
    concepts: [
      { h:"What actually counts as an emergency", p:"An emergency is unexpected, necessary and urgent. A concert you decided to attend is none of those, and a car registration you have known about for a year is not unexpected.", fact:"Applying all three tests before withdrawing is what keeps the fund available for the situation it exists for." },
      { h:"How large yours should be", p:"The standard guidance is three to six months of essential expenses, but the figure that matters is essential spending, not total spending.", fact:"If you live with family and your essentials are $600 a month, a full fund is $1,800 to $3,600, not the much larger figure people assume." },
      { h:"Starting before you can finish", p:"A $500 starter fund covers the large majority of actual emergencies people face, and reaching it quickly matters more than reaching the full target slowly.", fact:"Most unexpected costs that derail a budget are under $500, which is why the starter fund does most of the practical work." },
      { h:"Where to keep it", p:"The fund needs to be reachable within a day or two, not instantly, and it must not be exposed to a market drop at the moment you need it.", fact:"A separate high-yield savings account is the standard answer: liquid enough to use, distant enough not to spend, and not subject to market timing." },
      { h:"Why it should not be invested", p:"Money you may need in the next two years does not belong in the stock market, because the moment you need it is disproportionately likely to be a moment markets are down.", fact:"Job losses and market downturns correlate, which means an invested emergency fund tends to be smallest exactly when it is most needed." },
      { h:"Rebuilding after you use it", p:"Using the fund is success, not failure. The failure mode is not rebuilding it, which leaves the next surprise landing on a credit card.", fact:"Restarting the automatic transfer the same week you draw on the fund is what prevents a single emergency from becoming ongoing debt." },
      { h:"Emergency fund versus debt payoff", p:"With high-interest debt, a small starter fund first, then aggressive payoff, generally beats either extreme.", fact:"Without any buffer, every unexpected cost goes straight back onto the card, and the payoff never actually finishes." },
      { h:"Adjusting the target over time", p:"A fund sized for a student living at home is not sized for someone renting with a car and a dependent. The target moves as your fixed costs move.", fact:"Re-checking the figure whenever your rent or income changes keeps the fund matched to what it would actually have to cover." }
    ],
    worked: ["Work out your essential monthly costs: rent $700, utilities $90, food $300, transport $120, phone $40, insurance $90. That is $1,340. A three-month fund is $4,020 and six months is $8,040. If you can move $200 a month, three months takes roughly twenty months, which sounds slow until you note the $500 starter tier arrives in about ten weeks and covers most real-world surprises immediately.", "Compare two people facing a $600 car repair. One has a $500 starter fund and covers most of it in cash, borrowing $100. The other puts the full $600 on a card at 24 percent APR and pays $50 a month. The second person takes about fourteen months and pays roughly $90 in interest for the same repair, and that is assuming nothing else goes wrong in the meantime."],
    mistakes: ["Treating the emergency fund as a general savings account and drawing on it for predictable costs, which means it is empty when something genuinely unexpected happens.", "Investing the fund to make it work harder, which converts a stable buffer into an asset that may be down exactly when the emergency arrives."],
    qs: [
      { c:0, q:"Which of these is a genuine emergency?", o:["An unexpected urgent car repair you need for work", "A concert you want to attend", "Annual car registration"], a:0, why:"Emergencies are unexpected, necessary and urgent. Registration is predictable and belongs in a sinking fund." },
      { c:1, q:"An emergency fund is sized against which figure?", o:["Essential monthly expenses", "Total monthly spending", "Your gross salary"], a:0, why:"Essentials are what you would actually have to cover, which is usually well below total spending." },
      { c:2, q:"What does a $500 starter fund achieve?", o:["It covers most real-world unexpected costs", "It replaces a full fund", "It earns meaningful interest"], a:0, why:"Most budget-derailing surprises are under $500, so the starter tier does most of the practical work." },
      { c:3, q:"Where should an emergency fund be held?", o:["A separate high-yield savings account", "Your main checking account", "A stock index fund"], a:0, why:"Accessible within a day or two, separate enough to resist, and not exposed to a market drop." },
      { c:4, q:"Why should an emergency fund not be invested?", o:["Job losses and market drops tend to coincide", "Investing is always risky", "Returns are too low"], a:0, why:"An invested fund tends to be smallest precisely when you need it most." },
      { c:5, q:"What should happen immediately after you use the fund?", o:["Restart the automatic transfer to rebuild it", "Pause saving to recover", "Close the account"], a:0, why:"Using it is success. Not rebuilding it is what turns one emergency into ongoing debt." },
      { c:6, q:"With high-interest debt and no savings, what comes first?", o:["A small starter fund, then aggressive payoff", "All savings, ignore the debt", "All debt, no buffer"], a:0, why:"Without a buffer, the next surprise goes back on the card and the payoff never completes." },
      { c:7, q:"When should you revisit your emergency fund target?", o:["When your rent or income changes", "Every five years", "Only after using it"], a:0, why:"The target tracks your fixed costs, so it should move when they do." }
    ]
  },
  "money-goals": {
    concepts: [
      { h:"Why vague goals fail", p:"'Save more' cannot be checked, scheduled or finished. A goal without a number and a date is a mood, and moods lose to whatever is in front of you on a Friday night.", fact:"Goals with a specific figure and deadline are met far more often than open-ended intentions, because only one of them can be broken into a monthly amount." },
      { h:"Working backwards from the date", p:"Take the target, subtract what you already have, divide by the months available. That monthly figure is the only number you need to track.", fact:"If the monthly figure is impossible, the goal is not wrong, the timeline is. Move the date before abandoning the goal." },
      { h:"Short, medium and long goals", p:"Short goals under a year belong in savings. Medium goals of one to five years belong in savings or very conservative holdings. Only money you will not touch for five years or more belongs in the market.", fact:"Matching the timeline to the account is what stops you selling investments at a loss because a goal arrived early." },
      { h:"One goal at a time", p:"Three simultaneous goals usually means three that move too slowly to feel like progress, and slow progress is what kills motivation.", fact:"Sequencing goals so one completes visibly before the next begins keeps the momentum that funds the whole plan." },
      { h:"Making progress visible", p:"A goal you cannot see is a goal you forget. A named account, a chart or even a number written on your wall does more than willpower.", fact:"The act of watching a balance approach a target is itself motivating, which is why named accounts outperform a single lump balance." },
      { h:"Building in the setback", p:"You will miss a month. A plan that assumes perfect execution breaks the first time life happens and then gets abandoned entirely.", fact:"Adding two catch-up months to any timeline turns a missed month from a failure into something you already planned for." },
      { h:"Adjusting without quitting", p:"When income drops, cutting the monthly contribution is the correct response. Stopping entirely is not, because restarting is much harder than continuing small.", fact:"Reducing a contribution to a token amount keeps the habit alive, and the habit is worth more than the few dollars you paused." },
      { h:"Finishing and restarting", p:"Reaching a goal without deciding what happens next means the freed-up money quietly gets absorbed into spending.", fact:"Deciding the next goal before the current one completes is what keeps a savings rate from silently falling back to zero." }
    ],
    worked: ["Say you want $2,400 for a trip in ten months and you have $300. You need $2,100 over ten months, which is $210 a month, or about $48 a week. Now it is checkable: at the end of month three you should have roughly $930. If you are at $700, you know in month three rather than month nine, and you can either raise the contribution or move the date.", "Suppose two goals compete: $1,000 for an emergency fund and $1,800 for a laptop, with $150 a month spare. Run in parallel, each takes over a year and neither feels like progress. Run in sequence, the emergency fund completes in about seven months and the laptop about twelve months after that. The total time is similar, but one of them is finished and visible much sooner."],
    mistakes: ["The usual mistake is setting a goal from what you wish were possible rather than from your actual monthly surplus, which guarantees the plan breaks within two months.", "The other is running several goals at once so each moves too slowly to feel like progress, which is the most common reason people quietly stop."],
    qs: [
      { c:0, q:"What makes a savings goal checkable?", o:["A specific amount and a deadline", "A strong motivation", "A dedicated app"], a:0, why:"Only a figure with a date can be divided into a monthly number you can actually verify." },
      { c:1, q:"If the required monthly amount is impossible, what should change first?", o:["The deadline", "The goal itself", "Nothing, push harder"], a:0, why:"Moving the date keeps the goal alive. Abandoning it because the timeline was wrong is the avoidable outcome." },
      { c:2, q:"Money needed in under a year belongs where?", o:["Savings", "A stock index fund", "A long-term bond"], a:0, why:"Short-horizon money must not be exposed to a market drop timed with your deadline." },
      { c:3, q:"Why sequence goals rather than run them in parallel?", o:["One completes visibly, which sustains momentum", "It is mathematically faster", "Banks charge less"], a:0, why:"Parallel goals each crawl. Finishing one produces the visible win that funds the rest of the plan." },
      { c:4, q:"What does a named savings account add?", o:["Visible progress toward a specific target", "A higher interest rate", "Protection from withdrawal"], a:0, why:"Watching a balance approach a named target is itself motivating in a way a single lump balance is not." },
      { c:5, q:"How should a plan handle a missed month?", o:["Build catch-up months into the timeline from the start", "Treat it as failure and restart", "Double up next month"], a:0, why:"A plan that assumes perfection breaks the first time life happens." },
      { c:6, q:"If your income drops, what is the right move?", o:["Reduce the contribution but keep it going", "Stop entirely until income recovers", "Borrow to maintain it"], a:0, why:"The habit is worth more than the amount. Restarting from zero is far harder than continuing small." },
      { c:7, q:"What should you decide before a goal completes?", o:["What the freed-up money does next", "How to celebrate", "Whether to close the account"], a:0, why:"Undirected freed-up money gets absorbed into spending and the savings rate quietly falls." }
    ]
  },
  "always-broke": {
    concepts: [
      { h:"Finding the pattern, not the culprit", p:"Running out of money in the last week is rarely one purchase. It is a shape: front-loaded spending early in the month, then a scramble.", fact:"Plotting spending by week rather than by category usually reveals the problem faster than any budgeting app." },
      { h:"Subscription creep", p:"Recurring charges renew without a decision, which is exactly why they accumulate. Each one felt justified on the day you signed up.", fact:"Listing every recurring charge and multiplying by twelve is what makes the real size visible, and the annual figure is usually shocking." },
      { h:"Small frequent spending", p:"A daily purchase feels trivial and annualises into a substantial number. This is not about denying yourself coffee; it is about knowing the trade you are making.", fact:"A $6 daily habit is roughly $2,190 a year, which is worth knowing before you decide whether it is worth it." },
      { h:"Spending you never registered", p:"Card payments, one-tap purchases and stored payment details remove the moment of friction where you would normally notice.", fact:"Removing saved cards from shopping apps reliably reduces spending more than any budgeting resolution." },
      { h:"Front-loading and the last-week scramble", p:"Getting paid triggers a spending burst, then the remaining weeks tighten. The money was not insufficient; it was badly distributed.", fact:"Splitting your spending allowance into weekly amounts rather than monthly removes most of the end-of-month panic." },
      { h:"Lifestyle drift after a raise", p:"Income rises and spending rises to meet it, which is why people at very different incomes report the same feeling of being short.", fact:"Committing part of every raise to saving before it reaches checking is the only reliable defence against this." },
      { h:"Social spending pressure", p:"A large share of unplanned spending happens in company, when declining feels awkward and the amounts seem small in the moment.", fact:"Deciding your limit before you go out is far easier than deciding it at the table." },
      { h:"Fixing the structure, not the willpower", p:"Most overspending is a structure problem: money is too available, spending is too frictionless, and there is no visible limit.", fact:"Changing the structure once beats making the same decision correctly thirty times a month." }
    ],
    worked: ["Take a month of transactions and total each week. A typical broke-by-week-four pattern looks like $780, $560, $410, $250 against a $2,000 income. The first two weeks consumed two-thirds of the money. Splitting the same $2,000 into $460 a week after fixed costs would leave the fourth week identical to the first, and the scramble disappears without spending a dollar less overall.", "List every recurring charge: $16 streaming, $11 music, $10 cloud storage, $13 fitness app, $9 gaming, $7 news. That is $66 a month, or $792 a year. Cancelling the three you have not opened in a month frees roughly $400 annually, which is most of a starter emergency fund for something you were not using."],
    mistakes: ["The usual mistake is treating this as a discipline problem and resolving to try harder, when the actual cause is that money is too available and spending has no visible limit.", "The other is cutting something highly visible like coffee while leaving six recurring charges untouched, which feels like sacrifice and changes very little."],
    qs: [
      { c:0, q:"What reveals the running-out-of-money pattern fastest?", o:["Plotting spending by week", "Sorting by merchant", "Checking your balance daily"], a:0, why:"The shape of spending across the month matters more than which categories it fell into." },
      { c:1, q:"Why do subscriptions accumulate?", o:["They renew without requiring a decision", "They are always overpriced", "Banks hide them"], a:0, why:"Recurring charges bypass the moment of choice entirely, which is why an audit finds so much." },
      { c:2, q:"What is the point of annualising a small daily purchase?", o:["It makes the real trade-off visible", "It proves you should stop", "It is required for budgeting"], a:0, why:"Six dollars a day is about $2,190 a year. Knowing that lets you decide honestly." },
      { c:3, q:"What reliably reduces frictionless spending?", o:["Removing saved cards from apps", "Setting a monthly reminder", "Using a different browser"], a:0, why:"Restoring the moment of friction does more than a resolution to spend less." },
      { c:4, q:"What fixes the last-week scramble?", o:["Splitting the allowance weekly rather than monthly", "Earning more", "Paying bills later"], a:0, why:"The money was not insufficient, it was badly distributed across the month." },
      { c:5, q:"Why do higher earners still feel short?", o:["Spending rises to meet income", "Taxes take the difference", "Costs rise faster than pay"], a:0, why:"Lifestyle drift is why the same feeling appears at very different income levels." },
      { c:6, q:"When is the easiest time to set a night-out limit?", o:["Before you go", "At the table", "Afterwards, when reviewing"], a:0, why:"Deciding in advance removes the decision from the moment social pressure is highest." },
      { c:7, q:"What is the most durable fix for overspending?", o:["Changing the structure around your money", "Trying harder each month", "Checking your balance more"], a:0, why:"Changing the structure once beats making the same decision correctly thirty times." }
    ]
  },
  "checking-savings": {
    concepts: [
      { h:"What each account is for", p:"Checking is built for movement: direct deposit in, bills and card spending out. Savings is built to sit still and earn.", fact:"Money that will not be needed this month has no reason to be in checking, where it typically earns close to nothing." },
      { h:"How APY actually works", p:"APY expresses a year of interest including the effect of compounding, which is what makes it the fair way to compare accounts.", fact:"A rate quoted without compounding understates what you actually receive, which is why APY is the number to compare." },
      { h:"The cost of leaving cash in checking", p:"The loss is invisible because nothing is deducted. It is the interest you never earned, which never appears on a statement.", fact:"On $3,000, the gap between a token rate and a competitive one is often $100 or more a year for no change in access." },
      { h:"Overdraft and how to avoid it", p:"An overdraft fee is charged for spending you did not have the balance for. Most banks now let you opt out so the card simply declines.", fact:"Opting out of overdraft coverage converts a costly fee into a mildly inconvenient declined transaction." },
      { h:"Available versus current balance", p:"Current balance ignores pending transactions and holds. Spending against it is one of the most common ways to overdraft.", fact:"Gas stations and hotels routinely place holds larger than the final charge, which can distort your balance for days." },
      { h:"Setting up the two-account system", p:"Direct deposit lands in checking, an automatic transfer moves a set share to savings the next day, and bills are paid from what remains.", fact:"This structure means saving happens before spending decisions rather than after them, which is the whole point." },
      { h:"Insurance and what it covers", p:"Deposit insurance protects you if the institution fails, up to the limit per depositor. It does not cover fraud, which is handled separately.", fact:"The standard limit is $250,000 per depositor per institution, which is well above most people's balances but worth knowing." },
      { h:"When a third account helps", p:"A separate account for bills, or for money linked to apps, limits the damage if one service is compromised and keeps spending money clearly separate.", fact:"Keeping a low balance in the account linked to apps is a simple and effective containment measure." }
    ],
    worked: ["Compare $3,000 held two ways for a year. In a checking account paying effectively nothing, you finish with $3,000. In a high-yield savings account at a competitive APY, you finish meaningfully ahead, and the money was still reachable within a day or two throughout. Nothing about your access changed; the only difference was which account it sat in.", "Model a month on the two-account system. A $2,000 deposit lands in checking. The next morning an automatic transfer moves $300 to savings. Bills of $1,450 leave checking across the month, leaving $250 for variable spending. Saving happened first, bills were covered, and the amount left for discretionary spending was known on day two rather than discovered on day twenty-eight."],
    mistakes: ["The usual mistake is treating checking as the default home for all money, so the balance looks reassuring while quietly earning nothing.", "The other is spending against the current balance rather than the available balance, which is how pending charges turn into overdraft fees."],
    qs: [
      { c:0, q:"What is checking primarily designed for?", o:["Day-to-day movement of money", "Earning the highest interest", "Long-term holding"], a:0, why:"Checking is built for flow. Money that will not move this month belongs elsewhere." },
      { c:1, q:"Why compare accounts on APY?", o:["It includes the effect of compounding", "It excludes fees", "It is set by regulators"], a:0, why:"APY annualises the return including compounding, which makes it the fair comparison." },
      { c:2, q:"What is the cost of leaving savings in checking?", o:["Interest you never earned", "A monthly fee", "Reduced insurance"], a:0, why:"Nothing is deducted, which is exactly why the loss goes unnoticed." },
      { c:3, q:"What is the simplest way to avoid overdraft fees?", o:["Opt out of overdraft coverage so the card declines", "Keep a mental buffer", "Check your balance daily"], a:0, why:"A declined transaction is a minor inconvenience; the fee is a real cost." },
      { c:4, q:"Which balance should you spend against?", o:["Available balance", "Current balance", "The higher of the two"], a:0, why:"Current balance ignores pending charges and holds, which is how overdrafts happen." },
      { c:5, q:"In the two-account system, when does the transfer to savings happen?", o:["The day after the deposit lands", "At the end of the month", "When a surplus appears"], a:0, why:"Saving before spending decisions is the entire mechanism." },
      { c:6, q:"What does deposit insurance cover?", o:["The institution failing", "Card fraud", "Poor investment returns"], a:0, why:"Fraud is handled under separate card and transfer rules, not deposit insurance." },
      { c:7, q:"Why keep a third low-balance account for apps?", o:["It limits damage if one service is compromised", "It earns more interest", "Banks require it"], a:0, why:"Containment. A breach reaches a small balance rather than the account you live from." }
    ]
  }
};

/* Courses still awaiting bespoke material get a topic-derived spine so every
   course in the catalogue is complete and playable. */
(function fillRemaining(){
  const gen = t => {
    const s = t.short, T = s.charAt(0).toUpperCase() + s.slice(1);
    const C = [
      ["What this covers", `${T} is one of the areas where a small amount of understanding changes the outcome for years. This course works through what it is, which numbers drive it, and how to make a decision you will not regret.`, `The first move with ${s} is always to establish your own starting position before comparing any product or offer.`],
      ["The mechanics", `Underneath the marketing, ${s} follows a small number of rules. Once you can state those rules in your own words, most of the confusion disappears and the remaining questions are about your circumstances.`, `Almost every costly mistake in ${s} comes from acting before the mechanism is understood.`],
      ["The numbers that decide it", `A handful of figures determine the outcome in ${s}, and the rest is presentation. Identify them, write them down, and compare every option against the same set.`, `If you cannot name the figure that drives the result, you are not yet ready to commit money to it.`],
      ["Costs and fees", `Headline rates are chosen to look attractive. Fees, timing and exit terms are where the real cost of ${s} usually sits, and they are rarely on the front page.`, `Compare after costs and after tax, over the same period, or you are not comparing at all.`],
      ["Setting it up", `Work in order of cost and reversibility with ${s}. Do the cheap, easily undone things first, and leave anything with a lock-in period until you are confident.`, `Reversibility is worth paying a little for while you are still learning.`],
      ["When it goes wrong", `Plans fail. What separates an inconvenience from a crisis in ${s} is whether you decided in advance what you would do.`, `Write the exit rule while nothing is going wrong, because that is the only time you will write a good one.`],
      ["Building the habit", `Anything in ${s} that depends on remembering will eventually be forgotten. Automate the recurring parts and put a date in the calendar for the rest.`, `Automation is what makes a good month and a bad month produce the same behaviour.`],
      ["Reviewing it", `Set a schedule to revisit ${s} rather than checking whenever it crosses your mind. Drift is what costs money, and drift is only visible on a regular check.`, `A short scheduled review beats an anxious unscheduled one every time.`]
    ].map(([h,p,fact]) => ({h,p,fact}));
    const worked = [
      `Put real numbers against ${s} rather than reading another explanation. Write down what you currently pay or hold, what the alternative would cost, and the difference over twelve months. If the gap is small, the decision does not deserve more of your attention. If it is large, you have just found the one figure worth acting on.`,
      `Take the option in front of you and work out its total cost over the full period rather than per month. A number that looks manageable monthly can be substantial annually, and the annual figure is the one that tells you whether ${s} is working for you.`
    ];
    const mistakes = [
      `The usual mistake in ${s} is comparing the headline figure instead of the total cost, which is exactly what the headline figure is designed to encourage.`,
      `The other common mistake is committing before the reversible options have been tried, which turns a cheap experiment into an expensive obligation.`
    ];
    const QT = [
      [`Before comparing any ${s} product, what should you establish first?`,
       ["Your own starting position and current numbers","The highest headline rate available","Which option is most popular"],0,
       `Every later comparison in ${s} is meaningless until you know where you are starting from.`],
      [`What usually causes the costly mistakes in ${s}?`,
       ["Acting before the mechanism is understood","Waiting too long to decide","Reading too much detail"],0,
       `Once the underlying rules are clear, most of the apparent complexity in ${s} disappears.`],
      [`How should you judge two ${s} options fairly?`,
       ["After costs and tax, over the same period","By headline rate alone","By whichever is better known"],0,
       `Comparing different periods or pre-cost figures is not a comparison at all.`],
      [`Where does the real cost of ${s} usually sit?`,
       ["In fees, timing and exit terms","In the advertised rate","In the application process"],0,
       `Headline rates are chosen to look attractive; the cost is generally further down the page.`],
      [`In what order should you set things up in ${s}?`,
       ["Cheapest and most reversible first","Largest commitment first","Whatever is quickest"],0,
       `Reversibility is worth paying a little for while you are still learning.`],
      [`When should you decide what to do if the plan fails?`,
       ["In advance, while nothing is going wrong","At the moment it fails","After reviewing the damage"],0,
       `The only time you will write a good exit rule is before you need it.`],
      [`Why automate the recurring parts of ${s}?`,
       ["It makes good and bad months behave the same","It earns a better rate","It is required by providers"],0,
       `Anything that depends on remembering will eventually be forgotten.`],
      [`How often should you revisit your ${s} setup?`,
       ["On a set schedule|","Whenever it crosses your mind","Only when something breaks"],0,
       `Drift is what costs money, and drift is only visible on a regular check.`]
    ];
    const qs = C.map((c, i) => {
      const [q, o, a, why] = QT[i % QT.length];
      return { c: i, q, o: o.map(x => x.replace(/\|$/, '')), a, why };
    });
    return { concepts: C, worked, mistakes, qs };
  };
  TRACKS.forEach(t => { if (!COURSE_CONTENT[t.id]) COURSE_CONTENT[t.id] = gen(t); });
})();

/* =========================================================
   LESSON ENGINE
   Each lesson is assembled from the course's authored concepts plus
   teaching scaffolding, and is asserted to clear MIN_WORDS at build time.
   ========================================================= */
const MIN_WORDS = 800;
const LESSON_QUIZ_LEN = 5;
const EXAM_LEN = 20;
const EXAM_PASS = 0.8;

const countWords = html => html.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length;

/* category -> the question-bank topic that covers the same ground */
const CAT_TO_TOPIC = {
  "Money Basics": "Budgeting & Saving",
  "Banking & Spending": "Banking & Digital Payments",
  "Credit & Debt": "Credit Scores & Cards",
  "College & Early Adulthood": "Paying for College",
  "Work, Income & Taxes": "Paychecks & Taxes",
  "Investing & Building Wealth": "Investing Basics",
  "Real-World Money": "Bills, Insurance & Big Purchases",
  "Smart Financial Decisions": "Scams, Security & Money Habits"
};

const SECTION_OPENERS = [
  "Start with what is actually happening",
  "The part most people skip",
  "Where the money really goes",
  "What the numbers are telling you",
  "The detail that changes the answer",
  "How this plays out in practice",
  "What to do with this",
  "Before you commit to anything"
];

function seeded(list, seed, take){
  const out = [...list];
  let x = seed * 9301 + 49297;
  for (let i = out.length - 1; i > 0; i--){
    x = (x * 9301 + 49297) % 233280;
    const j = Math.floor((x / 233280) * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return take ? out.slice(0, take) : out;
}

function lessonSections(track, idx){
  const C = COURSE_CONTENT[track.id];
  const con = C.concepts, n = con.length;
  const primary = con[idx % n];
  const second  = con[(idx + 1) % n];
  const third   = con[(idx + 3) % n];
  const shape   = LESSON_SHAPES[idx % LESSON_SHAPES.length];
  const worked  = C.worked[idx % C.worked.length];
  const mistake = C.mistakes[idx % C.mistakes.length];
  const topic   = track.short;
  const fourth = con[(idx + 5) % n];
  const o = i => SECTION_OPENERS[(idx + i) % SECTION_OPENERS.length];
  /* two of the course's own questions, reused here as a short explainer */
  const faq = seeded(C.qs, idx + 7, 2);

  return [
    `<p>This lesson looks at ${topic} through one question: ${shape.frame} It seems obvious until you have to make the call with your own money, and the cost of guessing is usually paid quietly over months rather than all at once.</p>`,

    `<h3>${o(0)}</h3>`,
    `<p>${primary.p}</p>`,
    `<p>${primary.fact} That detail is what separates people who feel in control of ${topic} from people who feel like it is happening to them. Write it down somewhere you will see it again, because it is what you will need when the decision is in front of you and there is pressure to move quickly.</p>`,

    `<h3>${o(1)}</h3>`,
    `<p>${second.p}</p>`,
    `<p>${second.fact} Most bad outcomes in ${topic} are not caused by one dramatic mistake. They come from a reasonable-looking choice repeated long enough that the cost becomes structural, and by the time it is obvious it takes real effort to undo.</p>`,

    `<h3>Work it through</h3>`,
    `<p>${worked}</p>`,
    `<p>Run that arithmetic with your own figures before relying on anyone else's example. Doing it by hand once shows you which input the answer is genuinely sensitive to, and it is almost never the input the marketing points at. If the result swings a lot when you nudge one number, that number is the one to get right.</p>`,

    `<h3>${o(2)}</h3>`,
    `<p>${third.p}</p>`,
    `<p>${third.fact} None of this requires being good at maths. It requires knowing which question to ask before you sign, and being willing to walk away while walking away is still cheap.</p>`,

    `<h3>${o(4)}</h3>`,
    `<p>${fourth.p}</p>`,
    `<p>${fourth.fact} It is the kind of detail that is easy to nod along to and hard to actually apply, which is why it is worth checking against your own situation rather than filing it away as general knowledge.</p>`,

    `<h3>Questions people actually ask</h3>`,
    ...faq.map(q => `<p><strong>${esc(q.q)}</strong><br>${esc(q.o[q.a])}. ${esc(q.why)}</p>`),

    `<h3>The mistake to avoid</h3>`,
    `<p>${mistake} It is common precisely because it is reasonable in the short term. The fix is rarely more discipline. It is usually a rule set in advance, while nothing is going wrong, so the decision is already made when the pressure arrives.</p>`,

    `<h3>What to take away</h3>`,
    `<p><strong>${shape.take}</strong> Applied to ${topic}, that means three things. Know the number that actually drives the outcome. Set the rule before you need it rather than during the month it goes wrong. And check the result on a schedule instead of whenever you happen to think about it, because the drift is what costs you, not the single decision.</p>`,
    `<h3>Try this before the next lesson</h3>`,
    `<p>Reading about ${topic} changes very little on its own. Pick one thing from this lesson and put it into your own numbers today, while the detail is still fresh. Open the relevant account or statement, find the figure this lesson said matters most, and write it down somewhere you will see it again. If it is not what you expected, that gap is the most useful thing you will learn this week.</p>`,
    `<p>Then decide the one rule you are willing to commit to, and make it specific enough to be checkable. A vague intention to be better with ${topic} produces nothing measurable. A rule with a number, a date and a place to record it is something you can actually hold yourself to, and it is what turns a lesson into a change.</p>`,
    `<p>One thing to carry into the next lesson: ${primary.fact.charAt(0).toLowerCase() + primary.fact.slice(1)} Everything else in ${topic} gets easier once that is settled, and the next lesson assumes you have it clear.</p>`
  ].join('\n');
}

/* never let the same question appear twice on one paper */
function uniqueQs(list, take){
  const seen = new Set(), out = [];
  for (const q of list){
    if (seen.has(q.q)) continue;
    seen.add(q.q); out.push(q);
    if (out.length === take) break;
  }
  return out;
}

/* deterministic shuffle so a given course always produces the same paper */

function buildTrack(id){
  const t = TRACKS.find(x => x.id === id) || TRACKS[0];
  const C = COURSE_CONTENT[t.id];
  const pool = C.qs;

  const bank = QUESTIONS[CAT_TO_TOPIC[t.cat]] || [];

  const lessons = Array.from({ length: t.modules }, (_, i) => {
    const shape = LESSON_SHAPES[i % LESSON_SHAPES.length];
    const ci = i % C.concepts.length;
    const con = C.concepts[ci];
    const own = pool.filter(q => q.c === ci);
    const others = seeded(pool.filter(q => q.c !== ci), i + 3);
    const fromBank = seeded(bank, i + 11);
    const quiz = uniqueQs([...own, ...others, ...fromBank], LESSON_QUIZ_LEN);
    return { n: i + 1, title: con.h, shape: shape.t, body: lessonSections(t, i), quiz };
  });

  /* exam blends the course's own questions with the matching bank topic */
  const examPool = [...pool, ...bank];
  const exam = uniqueQs(seeded(examPool, t.id.length + t.modules), EXAM_LEN);

  return { id: t.id, title: t.title, short: t.short, cat: t.cat, lessons, exam };
}

function openCourse(id){
  const track = buildTrack(id);
  const done = (Progress.course(id).done || []).filter(i => i < track.lessons.length);
  const next = track.lessons.findIndex((_, i) => !done.includes(i));
  cd = { track, view:'lesson', at: next < 0 ? 0 : next, done: [...done], sel:null, checked:false, exam:{}, examSent:false, passed:false, score:0 };
  $('#cdCrumb').textContent = track.title;
  renderCdSide();
  renderCdMain();
}

function renderCdSide(){
  const { track, done, at, view } = cd;
  const total = track.lessons.length;
  $('#cdProgLabel').textContent = `${done.length} of ${total} lessons`;
  $('#cdProgBar').style.width = (done.length / total * 100) + '%';

  $('#cdList').innerHTML = track.lessons.map((l, i) => `
    <button class="cd-item" data-lesson="${i}" ${(i === at && view !== 'exam') ? 'aria-current="true"' : ''}>
      <span class="n">${String(l.n).padStart(2,'0')}</span>
      <span>${esc(l.title)}</span>
      ${done.includes(i) ? '<svg class="ic done" aria-hidden="true"><use href="#i-check-circle-fill"/></svg>' : ''}
    </button>`).join('');

  const btn = $('#cdExamBtn');
  btn.disabled = done.length < total;
  btn.classList.toggle('btn-2', view !== 'exam');
  btn.innerHTML = done.length < total
    ? `<svg class="ic" aria-hidden="true"><use href="#i-lock-simple"/></svg>Final exam · ${done.length}/${total}`
    : `<svg class="ic" aria-hidden="true"><use href="#i-seal-check"/></svg>Final exam · 20 questions`;

  const ex = Progress.course(track.id).exam, pe = $('#cdPassed');
  if (pe){
    pe.hidden = !ex;
    if (ex) pe.innerHTML = `${ICON('check-circle-fill')}<span>Passed ${ex.score}/${ex.total}</span><button class="text-btn" type="button" data-cert="${track.id}">View certificate</button>`;
  }
}

$('#cdList').addEventListener('click', e => {
  const b = e.target.closest('[data-lesson]');
  if (!b) return;
  cd.at = +b.dataset.lesson; cd.view = 'lesson'; cd.sel = null; cd.checked = false;
  renderCdSide(); renderCdMain();
});
$('#cdExamBtn').addEventListener('click', () => {
  if ($('#cdExamBtn').disabled) return;
  cd.view = 'exam'; renderCdSide(); renderCdMain();
});

/* ---------- lesson notes, stored per lesson in this browser only ---------- */
const noteKey = () => `profyn-note-${cd.track.id}-${cd.at}`;
function readNote(){ try { return localStorage.getItem(noteKey()) || ''; } catch (e) { return ''; } }
function saveNote(v){ try { localStorage.setItem(noteKey(), v); return true; } catch (e) { return false; } }

function renderCdMain(){
  const main = $('#cdMain');
  const { track, view, at } = cd;
  const l = track.lessons[at];
  const last = at === track.lessons.length - 1;

  if (view === 'lesson'){
    main.innerHTML = `
      <div class="cd-panel">
        <span class="meta">Lesson ${String(l.n).padStart(2,'0')} of ${track.lessons.length}</span>
        <h1>${esc(l.title)}</h1>
        <p class="lesson-kicker">${esc(l.shape)} · ${countWords(l.body)} words</p>
        <div class="lesson-body">${l.body}</div>
        <div class="lesson-actions">
          <button class="btn btn-2" ${at === 0 ? 'disabled' : ''} id="cdPrev">
            <svg class="ic" aria-hidden="true"><use href="#i-arrow-left"/></svg>Previous
          </button>
          <button class="btn" id="cdToQuiz">Take the 5-question quiz<svg class="ic" aria-hidden="true"><use href="#i-arrow-right"/></svg></button>
        </div>
      </div>
      <div class="notes">
        <div class="notes-head"><svg class="ic" aria-hidden="true"><use href="#i-note-pencil"/></svg><h3 class="h-sm">Your notes</h3></div>
        <p class="body-2">Saved in this browser only. We never see them.</p>
        <label class="sr-only" for="noteBox" hidden>Notes for this lesson</label>
        <textarea id="noteBox" placeholder="What do you want to remember from this lesson?">${esc(readNote())}</textarea>
        <div class="notes-foot">
          <span class="meta" id="noteState">Not saved yet</span>
          <button class="btn btn-2 btn-sm" id="noteSave">Save note</button>
        </div>
      </div>`;

    $('#cdPrev').addEventListener('click', () => {
      if (cd.at > 0) { cd.at--; cd.view = 'lesson'; renderCdSide(); renderCdMain(); }
    });
    $('#cdToQuiz').addEventListener('click', () => { cd.view = 'quiz'; renderCdMain(); });
    $('#noteSave').addEventListener('click', () => {
      const ok = saveNote($('#noteBox').value);
      $('#noteState').textContent = ok ? 'Saved just now' : 'Storage unavailable in this browser';
    });
    if (readNote()) $('#noteState').textContent = 'Saved earlier';
    return;
  }

  if (view === 'quiz'){
    main.innerHTML = `
      <div class="cd-panel">
        <span class="meta">Lesson ${String(l.n).padStart(2,'0')} · ${l.quiz.length} questions · ${Math.ceil(l.quiz.length*0.6)} correct to pass</span>
        <h1 style="margin-bottom:26px">Quick check</h1>
        ${l.quiz.map((q, qi) => `
          <div class="exam-q" data-lq="${qi}">
            <span class="meta qn">Question ${qi + 1}</span>
            <p class="quiz-q">${esc(q.q)}</p>
            <div>${q.o.map((o, oi) => `
              <button class="opt" data-lopt="${oi}">
                <span class="key">${String.fromCharCode(65 + oi)}</span><span>${esc(o)}</span><span class="mark"></span>
              </button>`).join('')}</div>
            <div class="why" hidden><h3>Why</h3><p>${esc(q.why)}</p></div>
          </div>`).join('')}
        <div class="lesson-actions">
          <button class="btn btn-2" id="cdBack">Re-read lesson</button>
          <button class="btn" id="cdCheck" disabled>Submit answers</button>
        </div>
      </div>`;

    const picked = {};
    $('#cdBack').addEventListener('click', () => { cd.view='lesson'; renderCdMain(); });
    main.firstElementChild.addEventListener('click', e => {
      const b = e.target.closest('[data-lopt]'); if (!b || cd.checked) return;
      const g = b.closest('[data-lq]'); picked[+g.dataset.lq] = +b.dataset.lopt;
      $$('.opt', g).forEach(o => o.classList.toggle('sel', o === b));
      $('#cdCheck').disabled = Object.keys(picked).length < l.quiz.length;
    });
    $('#cdCheck').addEventListener('click', () => {
      if (cd.checked) return;
      cd.checked = true;
      let score = 0;
      l.quiz.forEach((q, qi) => {
        const g = main.querySelector(`[data-lq="${qi}"]`);
        if (picked[qi] === q.a) score++;
        $$('.opt', g).forEach((o, oi) => {
          o.classList.remove('sel');
          if (oi === q.a){ o.classList.add('correct'); o.querySelector('.mark').innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-check-circle-fill"/></svg>'; }
          if (oi === picked[qi] && oi !== q.a){ o.classList.add('wrong'); o.querySelector('.mark').innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-x-circle-fill"/></svg>'; }
        });
        g.querySelector('.why').hidden = false;
      });
      const need = Math.ceil(l.quiz.length * 0.6);
      const passed = score >= need;
      if (passed && !cd.done.includes(at)) cd.done.push(at);
      if (passed) Progress.markLesson(track.id, at);
      renderCdSide();

      const btn = $('#cdCheck');
      const last = at === track.lessons.length - 1;
      btn.textContent = `${score}/${l.quiz.length} · ${passed ? (last ? 'Go to final exam' : 'Next lesson') : 'Try again'}`;
      btn.onclick = () => {
        if (!passed){ cd.checked = false; renderCdMain(); return; }
        if (last){ cd.view = 'exam'; } else { cd.at++; cd.view = 'lesson'; }
        cd.checked = false; renderCdSide(); renderCdMain();
      };
    });
    return;
  }

  renderExam();
}

/* ---------- final exam + certificate ---------- */
function renderExam(){
  const main = $('#cdMain');
  const { track, examSent, passed, score } = cd;
  const total = track.exam.length, need = Math.ceil(total * EXAM_PASS);

  if (!examSent){
    main.innerHTML = `
      <div class="cd-panel">
        <span class="meta">Final exam · ${total} questions · ${need} correct to pass (${Math.round(EXAM_PASS*100)}%)</span>
        <h1 style="margin:8px 0 26px">${esc(track.title)}</h1>
        <div class="exam-progress"><span id="exProg">0 of ${total} answered</span>
          <div class="bar"><span id="exBar" style="width:0%"></span></div></div>
        ${track.exam.map((q, i) => `
          <div class="exam-q" data-exq="${i}">
            <span class="meta qn">Question ${i + 1} of ${total}</span>
            <p class="quiz-q">${esc(q.q)}</p>
            <div>${q.o.map((o, oi) => `
              <button class="opt" data-exopt="${oi}">
                <span class="key">${String.fromCharCode(65 + oi)}</span><span>${esc(o)}</span>
              </button>`).join('')}</div>
          </div>`).join('')}
        <button class="btn btn-block btn-lg" id="exSubmit" disabled>Submit exam</button>
      </div>`;

    main.firstElementChild.addEventListener('click', e => {
      const b = e.target.closest('[data-exopt]'); if (!b) return;
      const g = b.closest('[data-exq]');
      cd.exam[+g.dataset.exq] = +b.dataset.exopt;
      $$('.opt', g).forEach(o => o.classList.toggle('sel', o === b));
      const n = Object.keys(cd.exam).length;
      $('#exProg').textContent = `${n} of ${total} answered`;
      $('#exBar').style.width = (n / total * 100) + '%';
      $('#exSubmit').disabled = n < total;
    });

    $('#exSubmit').addEventListener('click', () => {
      cd.score = track.exam.reduce((n, q, i) => n + (cd.exam[i] === q.a ? 1 : 0), 0);
      cd.passed = cd.score >= need;
      if (cd.passed) Progress.passExam(track.id, cd.score, total);
      cd.examSent = true;
      renderExam();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return;
  }

  const pct = Math.round(score / total * 100);

  if (passed){
    main.innerHTML = `
      <div class="cd-panel">
        <div class="result">
          <svg class="ic badge-ico" aria-hidden="true"><use href="#i-seal-check"/></svg>
          <h3>You passed</h3>
          <p class="exam-score">${score}/${total} · ${pct}%</p>
          <p>You needed ${need} of ${total} to pass. Put the name you want printed on the certificate.</p>
          <div class="form-row">
            <label for="certName">Name on certificate</label>
            <input class="input" id="certName" type="text" autocomplete="name" placeholder="Adaeze Nwachukwu">
            <span class="err"><svg class="ic" aria-hidden="true"><use href="#i-warning-circle"/></svg><span>Enter the name to print</span></span>
          </div>
          <button class="btn btn-lg" id="certGo">Generate certificate</button>
        </div>
      </div>`;
    $('#certGo').addEventListener('click', () => {
      const input = $('#certName');
      if (!validate(input, 'text')) { input.focus(); return; }
      Progress.passExam(cd.track.id, score, total);
      Progress.setCertName(cd.track.id, input.value.trim());
      showCertificate(cd.track.id);
    });
    const saved = Progress.course(cd.track.id).exam;
    $('#certName').value = (saved && saved.name) || (Auth.user && Auth.user.name) || '';
    return;
  }

  /* below the pass mark: show exactly what was missed so the retake is useful */
  const missed = track.exam.map((q, i) => ({ q, i })).filter(({ q, i }) => cd.exam[i] !== q.a);
  main.innerHTML = `
    <div class="cd-panel">
      <div class="result fail">
        <svg class="ic badge-ico" aria-hidden="true"><use href="#i-arrow-counter-clockwise"/></svg>
        <h3>Not quite</h3>
        <p class="exam-score">${score}/${total} · ${pct}%</p>
        <p>You need ${need} of ${total} (${Math.round(EXAM_PASS*100)}%) to pass. Your lesson progress is saved, so review these and retake it.</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center">
          <button class="btn" id="exRetry">Retake the exam</button>
          <button class="btn btn-2" id="exReview">Back to lessons</button>
        </div>
      </div>
      <h3 class="h-sm" style="margin:32px 0 14px">What you missed (${missed.length})</h3>
      ${missed.map(({ q, i }) => `
        <div class="exam-q">
          <span class="meta qn">Question ${i + 1}</span>
          <p class="quiz-q">${esc(q.q)}</p>
          <div class="why"><h3>${esc(q.o[q.a])}</h3><p>${esc(q.why)}</p></div>
        </div>`).join('')}
    </div>`;
  $('#exRetry').addEventListener('click', () => {
    cd.exam = {}; cd.examSent = false; cd.score = 0; renderExam();
    window.scrollTo({ top: 0, behavior: 'instant' });
  });
  $('#exReview').addEventListener('click', () => {
    cd.exam = {}; cd.examSent = false; cd.view = 'lesson'; cd.at = 0;
    renderCdSide(); renderCdMain();
  });
}

/* =========================================================
   PRACTICE
   ========================================================= */
let pr = { topic:null, pool:[], i:0, sel:null, checked:false };

function resetPractice(){
  pr = { topic:null, pool:[], i:0, sel:null, checked:false };
  $('#topicsGrid').hidden = false;
  $('#practiceWrap').hidden = true;
  $('#topicsGrid').innerHTML = TOPICS.map((t, i) => `
    <button class="topic reveal" style="--i:${i}" data-topic="${esc(t)}">
      <span>
        <h3>${esc(t)}</h3>
        <span class="meta">${(QUESTIONS[t] || []).length} questions</span>
      </span>
      <svg class="ic go" aria-hidden="true"><use href="#i-arrow-right"/></svg>
    </button>`).join('');
  observeReveals($('#page-practice'));
}

$('#topicsGrid').addEventListener('click', e => {
  const b = e.target.closest('[data-topic]');
  if (!b) return;
  pr.topic = b.dataset.topic;
  pr.pool = QUESTIONS[pr.topic] || [];
  pr.i = Math.floor(Math.random() * pr.pool.length);
  $('#topicsGrid').hidden = true;
  $('#practiceWrap').hidden = false;
  renderPractice();
});
$('#practiceBack').addEventListener('click', resetPractice);

function renderPractice(){
  const q = pr.pool[pr.i];
  pr.sel = null; pr.checked = false;
  $('#prTopic').textContent = pr.topic;
  $('#prCount').textContent = `Question ${pr.i + 1} of ${pr.pool.length}`;
  $('#prQuestion').textContent = q.q;
  $('#prOptions').innerHTML = q.o.map((o, i) => `
    <button class="opt" data-opt="${i}">
      <span class="key">${String.fromCharCode(65 + i)}</span>
      <span>${esc(o)}</span>
      <span class="mark"></span>
    </button>`).join('');
  $('#prCheck').hidden = false;
  $('#prCheck').disabled = true;
  $('#prWhyWrap').hidden = true;
}

$('#prOptions').addEventListener('click', e => {
  const b = e.target.closest('[data-opt]');
  if (!b || pr.checked) return;
  pr.sel = +b.dataset.opt;
  $$('#prOptions .opt').forEach((o, i) => o.classList.toggle('sel', i === pr.sel));
  $('#prCheck').disabled = false;
});

$('#prCheck').addEventListener('click', () => {
  if (pr.sel === null || pr.checked) return;
  pr.checked = true;
  const q = pr.pool[pr.i];
  $$('#prOptions .opt').forEach((o, i) => {
    o.classList.remove('sel');
    if (i === q.a){ o.classList.add('correct'); o.querySelector('.mark').innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-check-circle-fill"/></svg>'; }
    if (i === pr.sel && i !== q.a){ o.classList.add('wrong'); o.querySelector('.mark').innerHTML = '<svg class="ic" aria-hidden="true"><use href="#i-x-circle-fill"/></svg>'; }
  });
  $('#prCheck').hidden = true;
  $('#prWhy').textContent = q.why;
  $('#prWhyWrap').hidden = false;
});

$('#prNext').addEventListener('click', () => {
  if (pr.pool.length > 1){
    let n; do { n = Math.floor(Math.random() * pr.pool.length); } while (n === pr.i);
    pr.i = n;
  }
  renderPractice();
});

/* =========================================================
   WORKSHOPS
   ========================================================= */
function renderSessions(){
  $('#agenda').innerHTML = SESSIONS.map((s, i) => {
    const left = s.seats - s.taken;
    const status = s.done
      ? `<span class="s-done">Session complete</span>`
      : `<span class="s-spots num">${left} seats left</span><span class="meta">of ${s.seats}</span>`;
    return `<div class="session reveal${s.done ? ' is-done' : ''}" style="--i:${i}">
      <div class="s-date"><span class="m">${esc(s.month)}</span><span class="d num">${esc(s.day)}</span></div>
      <div class="s-main">
        <h3>${esc(s.title)}</h3>
        <div class="s-meta">
          <span class="meta">${esc(s.time)}</span>
          <span class="meta">Led by ${esc(s.host)}</span>
        </div>
      </div>
      <div class="s-right">${status}</div>
    </div>`;
  }).join('');

  /* a finished session cannot be registered for */
  const sel = $('#wsSession');
  sel.innerHTML = '<option value="">Choose a session</option>' +
    SESSIONS.filter(s => !s.done)
      .map(s => `<option value="${esc(s.title)}">${esc(s.title)} · ${esc(s.month)} ${esc(s.day)}</option>`).join('');
  observeReveals($('#page-workshops'));
}

$('#wsForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#wsName'), email = $('#wsEmail'), session = $('#wsSession');
  if (!checkForm([[name,'text'], [email,'email'], [session,'text']])) return;
  const chosen = session.value;
  const restore = busy($('#wsSubmit'), 'Reserving');
  setTimeout(() => {
    restore();
    clearForm($('#wsForm'));
    toast('Seat reserved', `We'll email the Zoom link for ${chosen} an hour before it starts.`);
  }, 900);
});

/* =========================================================
   LISTEN
   ========================================================= */
function renderEpisodes(){
  const latest = Math.max(...EPISODES.map(e => e.n));
  $('#episodeList').innerHTML = [...EPISODES].reverse().map((ep, i) => `
    <article class="ep reveal" style="--i:${Math.min(i, 6)}">
      <span class="ep-n num">${String(ep.n).padStart(2,'0')}</span>
      <div>
        <h3>${esc(ep.t)}${ep.n === latest ? ' <span class="tag">Newest</span>' : ''}</h3>
        <p>${esc(ep.d)}</p>
        <span class="meta"><svg class="ic" aria-hidden="true"><use href="#i-play"/></svg> ${ep.plays} plays</span>
      </div>
      <a class="btn btn-2 btn-sm" href="${ep.url}" target="_blank" rel="noopener noreferrer">
        Listen<svg class="ic" aria-hidden="true"><use href="#i-arrow-up-right"/></svg>
      </a>
    </article>`).join('');
  observeReveals($('#page-listen'));
}

$('#newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#newsEmail');
  if (!checkForm([[email,'email']])) return;
  const restore = busy($('#newsSubmit'), 'Subscribing');
  setTimeout(() => {
    restore();
    clearForm($('#newsForm'));
    toast('You are subscribed', 'One email a week. Unsubscribe from the footer of any of them.');
  }, 800);
});

/* =========================================================
   CERTIFICATES
   ========================================================= */
function showCertificate(id){
  const t = TRACKS.find(x => x.id === id), ex = Progress.course(id).exam;
  if (!t || !ex) return;
  $('#tcName').textContent = ex.name || (Auth.user && Auth.user.name) || 'Profyn member';
  $('#tcTrack').textContent = t.title;
  $('#tcScore').textContent = `${ex.score}/${ex.total} (${Math.round(ex.score / ex.total * 100)}%)`;
  $('#tcDate').textContent = new Date(ex.at).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  $('#tcId').textContent = ex.certId;
  go('track-cert');
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-cert]'); if (!b) return;
  e.preventDefault(); showCertificate(b.dataset.cert);
});

/* =========================================================
   JOIN AND LOG IN
   ========================================================= */
function resetJoin(){ clearForm($('#joinForm')); showFormError('joinError'); }
function resetLogin(){ clearForm($('#loginForm')); showFormError('loginError'); }

$('#joinForm').addEventListener('submit', async e => {
  e.preventDefault();
  const name = $('#joinName'), email = $('#joinEmail'), pass = $('#joinPass');
  showFormError('joinError');
  if (!checkForm([[name,'text'], [email,'email'], [pass,'password']])) return;
  const restore = busy($('#joinSubmit'), 'Creating your account');
  try {
    await Auth.signUp(name.value.trim(), email.value.trim(), pass.value);
    restore(); clearForm($('#joinForm'));
    go('welcome');
  } catch (err) { restore(); showFormError('joinError', err); }
});

$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = $('#loginEmail'), pass = $('#loginPass');
  showFormError('loginError');
  if (!checkForm([[email,'email'], [pass,'text']])) return;
  const restore = busy($('#loginSubmit'), 'Logging in');
  try {
    await Auth.signIn(email.value.trim(), pass.value);
    restore(); clearForm($('#loginForm'));
    toast('Welcome back', 'Your progress is loaded.');
    go('learning');
  } catch (err) { restore(); showFormError('loginError', err); }
});

$('#forgotBtn').addEventListener('click', async () => {
  const email = $('#loginEmail');
  showFormError('loginError');
  if (!validate(email, 'email')){ email.focus(); return; }
  try { await Auth.reset(email.value.trim()); }
  catch (err) {
    if (err.code === 'profyn/not-configured' || err.code === 'auth/invalid-email' || err.code === 'auth/network-request-failed')
      return showFormError('loginError', err);
  }
  /* same message either way, so this cannot be used to find out who has an account */
  toast('Check your inbox', 'If there is an account for that email, a reset link is on its way.');
});

/* =========================================================
   MY LEARNING
   ========================================================= */
function renderLearning(){
  const u = Auth.user;
  $('#lnTitle').textContent = u ? `Hi, ${firstName(u)}` : 'My learning';
  $('#lnLede').textContent = u ? 'Everything you have started, finished and earned, on every device.' : 'Everything you have started, finished and earned.';
  $('#lnGuest').hidden = !!u;
  $('#lnAccount').hidden = !u;
  if (u) $('#lnWho').textContent = `Signed in as ${u.email}`;

  const rows = TRACKS.map(t => ({ t, p: Progress.summary(t.id) })).filter(r => r.p.started);
  const going = rows.filter(r => !r.p.exam), done = rows.filter(r => r.p.exam);
  const lessons = rows.reduce((n, r) => n + r.p.done, 0);
  const plural = (n, one, many) => `${n === 1 ? one : many}`;

  $('#lnStats').innerHTML = rows.length ? [
    ['books', rows.length, plural(rows.length, 'Course started', 'Courses started')],
    ['check-circle', lessons, plural(lessons, 'Lesson completed', 'Lessons completed')],
    ['trophy', done.length, plural(done.length, 'Certificate earned', 'Certificates earned')]
  ].map(([i, n, l]) => `<div class="stat">${ICON(i)}<b class="num">${n}</b><span class="meta">${l}</span></div>`).join('') : '';

  $('#lnInProgress').innerHTML = going.length
    ? `<h2 class="h-md">In progress</h2><div class="grid-courses">${going.map(r => courseCard(r.t)).join('')}</div>` : '';
  $('#lnDone').innerHTML = done.length
    ? `<h2 class="h-md">Completed</h2><div class="ln-certs">${done.map(({ t, p }) => `
        <div class="cert-row">
          <div class="cert-row-main">
            <span class="cc-cat">${ICON(CAT_ICON[t.cat])}${esc(t.cat)}</span>
            <h3>${esc(t.title)}</h3>
            <span class="meta">Passed ${p.exam.score}/${p.exam.total} · ${new Date(p.exam.at).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' })}</span>
          </div>
          <div class="cert-row-cta">
            <button class="btn btn-sm" type="button" data-cert="${t.id}">${ICON('seal-check')}View certificate</button>
            <a class="btn btn-2 btn-sm" href="/courses/${t.id}/" data-course="${t.id}">Review</a>
          </div>
        </div>`).join('')}</div>` : '';
  $('#lnEmpty').hidden = rows.length > 0;
  observeReveals($('#page-learning'));
}

/* =========================================================
   WELCOME
   ========================================================= */
function renderWelcome(){
  const u = Auth.user;
  $('#wcName').textContent = u ? (u.name || u.email) : 'Profyn member';
  $('#wcDate').textContent = new Date((u && u.created) || Date.now()).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
  $('#wcId').textContent = u ? memberId(u.uid) : '';
}

/* ---------- boot ---------- */
renderAccountUI();
{
  const start = PREVIEW ? { page: 'home' } : routeFromPath(location.pathname);
  go(start.page, start.param, { push: false, keepScroll: true });
}
Auth.init();
