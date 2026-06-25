# Home Care Management App

> A UK-compliant home care management platform for staff management, care planning, and regulatory compliance.

**Status:** MVP Development (Weeks 1–8)  
**Tech Stack:** Next.js, React, PostgreSQL (Supabase), Vercel  
**Cost:** Zero-cost MVP (free tiers only)

---

## 🎯 Quick Start

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- Git
- A free Supabase account ([supabase.com](https://supabase.com))
- A free Vercel account ([vercel.com](https://vercel.com))

### Local Setup (5 minutes)

```bash
# 1. Clone the repo
git clone https://github.com/toyets/Home-care.git
cd Home-care

# 2. Install dependencies
npm install

# 3. Create .env.local (ask your CTO for credentials)
cp .env.example .env.local

# 4. Run locally
npm run dev

# Open http://localhost:3000
```

---

## 📋 Project Structure

```
Home-care/
├── public/                 # Static assets (logos, icons)
├── app/                    # Next.js app (pages, layouts)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home/login page
│   ├── (auth)/            # Auth flows
│   │   ├── signup/
│   │   └── login/
│   ├── (dashboard)/       # Protected routes
│   │   ├── clients/       # Client management
│   │   ├── care-plans/    # Care planning
│   │   ├── shifts/        # Scheduling
│   │   ├── incidents/     # Incident reporting
│   │   ├── training/      # Training tracker
│   │   ├── messages/      # Messaging
│   │   └── audit/         # Audit logs
│   └── api/               # Backend API routes
│       ├── auth/
│       ├── clients/
│       ├── care-plans/
│       ├── shifts/
│       ├── incidents/
│       ├── training/
│       ├── messages/
│       └── audit/
├── components/             # Reusable React components
│   ├── Layout/
│   ├── Forms/
│   ├── Tables/
│   └── UI/
├── lib/                    # Utilities & helpers
│   ├── supabase.ts        # Database client
│   ├── auth.ts            # Auth helpers
│   ├── api.ts             # API client
│   └── audit.ts           # Audit logging
├── types/                  # TypeScript types
├── styles/                 # Tailwind CSS
├── .env.example           # Environment variables template
├── next.config.js         # Next.js config
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind CSS config
└── package.json           # Dependencies
```

---

## 🚀 MVP Features (Weeks 1–8)

- [x] **User Management:** Multi-tenant, role-based auth (Admin, Manager, Care Worker, Family Rep)
- [x] **Client Records:** Profiles, medical history, contact details
- [x] **Care Plans:** Versioning, e-signatures, review scheduling
- [x] **Scheduling:** Shift management, staffing alerts, calendar view
- [x] **Handovers:** Shift notes, sign-offs, continuity of care
- [x] **Incident Reporting:** CQC-compliant flagging, export for regulators
- [x] **Training Tracker:** Certificate upload, expiry alerts, renewal reminders
- [x] **Messaging:** In-app chat, email alerts, SMS (SMS in Phase 2)
- [x] **Consent Records:** E-signed consent, capacity assessment, withdrawal tracking
- [x] **Audit Trail:** All user actions logged (compliance-ready)

---

## 🛠️ Development Workflow

### Branch Strategy
```
main          → Production (stable releases)
develop       → Staging (next release)
feature/*     → Feature branches (create from develop)
bugfix/*      → Bug fixes (create from develop)
```

### Creating a Feature
```bash
# 1. Create branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/client-records

# 2. Make changes, commit
git add .
git commit -m "feat: add client records page"

# 3. Push & create PR
git push origin feature/client-records
# Open GitHub, create Pull Request to develop

# 4. After review/merge, delete branch
git branch -d feature/client-records
```

### Deployment
- **Main branch** → Auto-deploys to Vercel (production)
- **Develop branch** → Auto-deploys to staging.vercel.app
- **Feature branches** → Preview deployments (one-time URLs)

---

## 📚 Documentation

- **[STARTUP_ROADMAP.md](./STARTUP_ROADMAP.md)** – Phase breakdown, timeline, tech stack
- **[PRD.md](./docs/PRD.md)** – Full product requirements (to be created)
- **[DATABASE_SCHEMA.md](./docs/DATABASE_SCHEMA.md)** – PostgreSQL schema, ER diagram
- **[API_SPEC.md](./docs/API_SPEC.md)** – REST endpoints, request/response formats
- **[FRONTEND_GUIDE.md](./docs/FRONTEND_GUIDE.md)** – React components, styling, patterns
- **[DEPLOYMENT_GUIDE.md](./docs/DEPLOYMENT_GUIDE.md)** – Vercel, GitHub Actions, monitoring

---

## 🔐 Security & Compliance

**Built-in (MVP):**
- ✅ Supabase Auth (OAuth, JWT, session management)
- ✅ Role-based access control (RBAC)
- ✅ TLS encryption in transit (Vercel)
- ✅ Encrypted data at rest (Supabase default)
- ✅ Audit logging (all user actions)
- ✅ Consent records (CQC Reg 11)

**Phase 2 (Enhancements):**
- ⏳ Multi-factor authentication (TOTP)
- ⏳ GDPR data export & deletion
- ⏳ NHS Login integration
- ⏳ DSPT compliance checklist
- ⏳ DPIA documentation

---

## 💡 Key Principles

1. **Build incrementally:** Deploy every 1–2 weeks
2. **Security first:** All data is health data; treat as sensitive
3. **Compliance-driven:** Every feature links to CQC/GDPR
4. **User-centric:** Involve care workers in feedback
5. **Open & maintainable:** Code is well-documented, tested, reviewed

---

## 🤝 Team Roles

| Role              | Responsibility                                     | Contact |
|-------------------|----------------------------------------------------|---------|
| **CTO / PM**      | Roadmap, prioritization, stakeholder comms        | [name]  |
| **Tech Lead**     | Architecture, code review, deployment             | [name]  |
| **Backend Dev**   | API routes, database, auth integration            | [name]  |
| **Frontend Dev**  | React components, UI/UX, forms                    | [name]  |
| **QA/Tester**     | Testing, bug reports, accessibility checks       | [name]  |
| **Compliance**    | GDPR, CQC, DPIA, audit trail sign-off            | [name]  |

---

## 📞 Support & Escalation

- **Bug or feature idea?** → GitHub Issues
- **Quick question?** → GitHub Discussions or Slack #engineering
- **Critical security issue?** → security@[domain] (do not open public issue)
- **Regulatory question?** → Compliance Lead (email or meeting)

---

## 📅 MVP Timeline

| Week   | Focus                                      | Deliverable              |
|--------|--------------------------------------------|--------------------------|
| 1–2    | Setup, DB schema, login                    | Vercel URL (login works) |
| 3–4    | Client records, care plans                 | Client management demo   |
| 5      | Scheduling, rostering                      | Shift calendar demo      |
| 6      | Handovers, incident reporting              | Incident form ready      |
| 7      | Training tracker, messaging                | Trainer can upload certs |
| 8      | Testing, performance, launch prep          | MVP ready for beta users |

---

## 🎓 Learning Resources

- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Supabase:** https://supabase.com/docs
- **PostgreSQL:** https://www.postgresql.org/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 📄 License

MIT License – See LICENSE file

---

**Last updated:** 2026-06-25  
**Maintained by:** Engineering Team  
**Status:** 🟢 Active Development
