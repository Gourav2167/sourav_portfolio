export const portfolioData = {
    personalInfo: {
        name: "SOURAV SINGH",
        tagline: "Gold Medalist - MBA | Growth Strategy, Capital Markets and M&A | CFA Level 1 Candidate",
        description: "High-performing Finance Professional specializing in Capital Markets, Valuations, M&A advisory, DCF/LBO modeling, and quantitative analytics. Currently developing advanced financial valuation and modeling workflows at FactSet for institutional investment banking clients.",
        email: "souravsk1920@gmail.com",
        phone: "+91-9832538270",
        linkedin: "https://www.linkedin.com/in/sourav-singh08/",
        location: "Bengaluru, Karnataka",
        profilePhoto: "/profile-photo.png",
        cvPath: "/Sourav_MBA_20JAN_cv.pdf"
    },
    highlights: [
        { icon: "Trophy", title: "Gold Medalist MBA", subtitle: "9.0 CGPA - Alliance University" },
        { icon: "ChartLine", title: "18.4% Portfolio Returns", subtitle: "Outperformed NIFTY by 4.6%" },
        { icon: "Briefcase", title: "M&A Research", subtitle: "120 transactions analyzed" },
        { icon: "Users", title: "Leadership", subtitle: "Chief of Finance Club, Batch Topper" }
    ],
    experience: [
        {
            company: "FactSet Information Systems",
            role: "Advisor",
            location: "Hyderabad, India",
            date: "Nov 2025 - Present",
            achievements: [
                "Engineered automated valuation workflows for institutional IB clients using FQL, reducing model update times by 70%.",
                "Developed complex FQL/FDS formulas for stock screening and capital structure analysis.",
                "Built custom analytical frameworks for peer analysis and competitor benchmarking.",
                "Utilized Universal Screening and M&A Data for comparable company and precedent transaction models."
            ]
        },
        {
            company: "Baron Capitale & Wealth Management",
            role: "Wealth Management Intern",
            location: "Bengaluru, India",
            date: "Jan 2025 - Mar 2025",
            achievements: [
                "Executed equity research and DCF valuations for NBCC Ltd and L&T Finance.",
                "Spearheaded development of integrated financial models utilizing Monte Carlo simulations (12% improvement in accuracy).",
                "Drafted valuation reports and pitch decks for Series A funding."
            ]
        },
        {
            company: "Air India SATS Services",
            role: "Customer Service Executive",
            location: "Bengaluru, India",
            date: "June 2022 - Feb 2023",
            achievements: [
                "Reduced customer complaints by 40% for Emirates Airlines using statistical analysis.",
                "Achieved 96% on-time departure rate (OTP) through cross-functional coordination.",
                "Improved passenger throughput by 15% during peak periods."
            ]
        }
    ],
    education: [
        {
            degree: "MBA - Finance & WealthTech",
            institution: "Alliance University",
            gpa: "9.0",
            date: "Jan 2024 - Dec 2025",
            badge: "🏆 GOLD MEDALIST"
        },
        {
            degree: "BBA - Aviation Management",
            institution: "East Point College",
            gpa: "8.05",
            date: "Aug 2020 - Sep 2023",
            badge: "🥇 BATCH TOPPER"
        }
    ],
    skills: {
        financialModeling: ["DCF Modeling", "LBO Modeling", "Comparable Company Analysis", "Precedent Transaction Analysis", "Unit Economics", "Three-Statement Modeling", "Scenario & Sensitivity Analysis"],
        investmentBanking: ["M&A Advisory", "Due Diligence", "Deal Structuring", "Transaction Execution", "Pitch Book Creation", "Fairness Opinions"],
        portfolioManagement: ["Portfolio Construction", "Modern Portfolio Theory", "Risk-Return Optimization", "Asset Allocation", "Performance Attribution", "Sharpe Ratio Analysis"],
        technical: ["FactSet", "Bloomberg Terminal", "Python (Pandas, NumPy, Matplotlib)", "Advanced Excel (Power Query, VBA)", "MySQL", "SPSS"]
    },
    projects: [
        {
            title: "Impact of ESG on Value Creation in M&A",
            subtitle: "Empirical Research | Bloomberg Terminal",
            description: "Led a quantitative study on 120 global M&A transactions, demonstrating that 'High ESG' targets command a 75% valuation premium. Developed a proprietary ESG-integration model for risk-adjusted alpha generation.",
            downloadPath: "/projects/Dissertation_Report.pdf",
            metrics: [
                { label: "Transactions", value: "120" },
                { label: "Premium", value: "75%" },
                { label: "Alpha", value: "22.75pp" }
            ],
            tags: ["Bloomberg", "M&A", "ESG", "Statistics"]
        },
        {
            title: "Equity Research: IDFC FIRST Bank",
            subtitle: "Financial Modeling | Banking Sector",
            description: "Comprehensive multi-stage valuation of IDFC FIRST Bank (MCap: ₹43,806Cr). Analyzed Net Interest Margins (NIM) and CASA ratios against industry benchmarks (P/E 22.75 vs 12.31).",
            downloadPath: "/projects/IDFC_EQR.docx",
            metrics: [
                { label: "Market Cap", value: "₹43.8K Cr" },
                { label: "P/E Ratio", value: "22.75" },
                { label: "Coverage", value: "Banking" }
            ],
            tags: ["Equity Research", "Valuation", "Banking", "Excel"]
        },
        {
            title: "Equity Research: L&T Finance",
            subtitle: "Scenario Modeling | DCF Valuation",
            description: "Built a robust multi-scenario Discounted Cash Flow (DCF) model to determine intrinsic value for L&T Finance. Evaluated credit quality and liability mix to project sensitivity across interest rate cycles.",
            downloadPath: "/projects/LT_Finance_EQR.pdf",
            metrics: [
                { label: "Valuation", value: "DCF" },
                { label: "Model Type", value: "Scenario" },
                { label: "Sector", value: "NBFC" }
            ],
            tags: ["DCF", "Finance", "Modeling", "Risk Analysis"]
        },
        {
            title: "Equity Research: NBCC India",
            subtitle: "PSU Sector | Relative Valuation",
            description: "Detailed analysis of NBCC India Ltd, focusing on order book execution and project management efficiency. Conducted comprehensive relative valuation against industry peers.",
            downloadPath: "/projects/NBCC_EQR.pdf",
            metrics: [
                { label: "Sector", value: "PSU" },
                { label: "Method", value: "Relative" },
                { label: "Focus", value: "Order Book" }
            ],
            tags: ["PSU", "Valuation", "Infrastructure"]
        },
        {
            title: "Trading Strategy (Python MACD)",
            subtitle: "Algorithmic Trading | Python",
            description: "Engineered a systematic trend-following algorithm using MACD and RSI indicators. Achieved an 18.4% annualized return, outperforming the NIFTY 50 benchmark by 4.6% with controlled drawdown.",
            metrics: [
                { label: "Returns", value: "18.4%" },
                { label: "Alpha", value: "4.6%" },
                { label: "Sharpe Ratio", value: "1.12" }
            ],
            tags: ["Python", "Backtesting", "Quant", "Algo"]
        },
        {
            title: "Business Process Analysis (McDonald's)",
            subtitle: "Operations & Efficiency Study",
            description: "Diagnostic performance study across 3 flagship outlets. Identified 20% latency in order fulfillment and designed a digital tracking protocol projected to reduce inventory wastage by 8%.",
            metrics: [
                { label: "Outlets", value: "3" },
                { label: "Cost Savings", value: "8%" },
                { label: "Efficiency", value: "15-20%" }
            ],
            tags: ["Operations", "Six Sigma", "Optimization"]
        }
    ],
    charts: {
        portfolioPerformance: [
            { name: 'Jan', Sourav: 10, NIFTY: 8 },
            { name: 'Feb', Sourav: 15, NIFTY: 11 },
            { name: 'Mar', Sourav: 12, NIFTY: 10 },
            { name: 'Apr', Sourav: 20, NIFTY: 14 },
            { name: 'May', Sourav: 25, NIFTY: 18 },
            { name: 'Jun', Sourav: 18, NIFTY: 15 }
        ]
    }
};
