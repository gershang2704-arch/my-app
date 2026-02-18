# Gershan Carl G. Bon - Portfolio Website
## Deployment Guide to Vercel

Your personalized portfolio website has been successfully built! Follow these steps to deploy it on Vercel.

---

## ✅ Project Complete

Your portfolio includes:

### **Pages:**
- **Home** - Welcome with your name, age, school, and career goals
- **About** - Detailed bio, education, experience, hobbies, and career goals
- **Skills** - Technical skills with progress bars, soft skills, and tools
- **Projects** - 6 sample projects showcasing your work
- **Contact** - Contact form with name, email, subject, and message fields

### **Features:**
✓ Fully responsive design (mobile-friendly)
✓ Professional animations and transitions
✓ Beautiful gradient backgrounds
✓ Form handling with React state management
✓ Success confirmation after form submission
✓ Social media links
✓ Clean, modern UI with Bootstrap 5

---

## 🚀 Deploy to Vercel

### **Step 1: Create GitHub Repository**
1. Go to https://github.com and sign in
2. Click **New** to create a new repository
3. Name it: `portfolio` or `my-portfolio`
4. Make it **Public**
5. Click **Create repository**

### **Step 2: Push Code to GitHub**
In your terminal:

```bash
cd c:\Users\Admin\my-app
git init
git add .
git commit -m "Initial commit: Gershan's portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### **Step 3: Deploy on Vercel**
1. Go to https://vercel.com
2. Click **Sign up** (can sign up with GitHub)
3. Click **Import Project**
4. Paste your GitHub repository URL or select it from the list
5. Click **Import**
6. Click **Deploy**

Your site will be live in seconds! You'll get a URL like: `https://your-portfolio.vercel.app`

---

## 🎨 Customization Tips

### Update Your Information:
- Edit [src/pages/Home.js](src/pages/Home.js) - Welcome message
- Edit [src/pages/About.js](src/pages/About.js) - Your bio and info
- Edit [src/pages/Skills.js](src/pages/Skills.js) - Your skills
- Edit [src/pages/Projects.js](src/pages/Projects.js) - Your projects
- Edit [src/pages/Contact.js](src/pages/Contact.js) - Contact details

### Add Your Photo:
Replace placeholder images with your own:
- Home page: 400x400px image
- About page: 300x300px image
- Store images in `public/` folder and reference them

### Update Social Links:
Edit [src/pages/Home.js](src/pages/Home.js) and [src/component/Footer.js](src/component/Footer.js)
- Update GitHub, LinkedIn, Twitter URLs
- Update email address

---

## 📋 Checklist Before Deployment

- [ ] Replace placeholder images with your photo
- [ ] Update your name (already done: Gershan Carl G. Bon)
- [ ] Update email address in Contact page
- [ ] Update phone number (optional)
- [ ] Update location (already done: Cabuyao, Philippines)
- [ ] Add your actual GitHub, LinkedIn, Twitter links
- [ ] Test contact form locally
- [ ] Test all navigation links
- [ ] Check mobile responsiveness

---

## 🧪 Test Locally

Run the development server:

```bash
cd c:\Users\Admin\my-app
npm start
```

Visit `http://localhost:3000` in your browser.

---

## ✉️ Form Submission

The contact form currently displays a success message but doesn't send emails. To enable email functionality:

1. Sign up for **Formspree** (https://formspree.io) or **EmailJS**
2. Follow their documentation to integrate email service
3. Update the Contact form handler with their API

---

## 📁 Project Structure

```
my-app/
├── public/
│   ├── index.html
│   └── [your images here]
├── src/
│   ├── component/
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   └── SubmissionSuccess.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🔧 Troubleshooting

**Build Error?**
```bash
npm install
npm run build
```

**Port 3000 already in use?**
```bash
npm start -- --port 3001
```

**GitHub push errors?**
```bash
git config --global user.email "your.email@example.com"
git config --global user.name "Your Name"
```

---

## 🎯 Next Steps

1. **Deploy to Vercel** using steps above
2. **Share your portfolio** with others
3. **Continue learning** - add more projects and skills
4. **Update regularly** - keep your portfolio current

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Bootstrap 5](https://getbootstrap.com)
- [React Router](https://reactrouter.com)

---

**Created:** February 2026  
**Portfolio Owner:** Gershan Carl G. Bon  
**School:** Pamantasan ng Cabuyao  
**Year:** 3rd Year IT Student

Good luck with your portfolio! 🚀
