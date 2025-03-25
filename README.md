# React Concepts Repository

A comprehensive Next.js project showcasing various React concepts, patterns, and best practices. This repository serves as a learning and reference platform for modern React development.
This repository demonstrates various React concepts and patterns:

### State Management

- **Zustand Implementation**
  - Basic state management
  - Type-safe stores
  - Actions and state updates
  - Store organization
  - Component integration

### Modern React Patterns

- **Component Architecture**
  - Functional components
  - Custom hooks
  - Component composition
  - Props and state management
  - TypeScript integration

### Form Handling

- **React Hook Form + Zod**
  - Form validation
  - Type-safe forms
  - Error handling
  - Form state management

### UI/UX Development

- **Tailwind CSS**

  - Utility-first styling
  - Responsive design
  - Component styling
  - Custom configurations

- **Radix UI**

  - Accessible components
  - Unstyled components
  - Component composition
  - State management

- **shadcn/ui**
  - Pre-built components
  - Customizable design system
  - Component composition
  - Accessibility features
  - Dark mode support
  - Component variants

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives + shadcn/ui
- **Package Manager**: pnpm

## 📁 Project Structure

```
react-concepts/
├── app/                    # Next.js app directory (App Router)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── react-concepts/   # Concept-specific components
│   └── tailwind/         # Tailwind-specific components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and shared logic
├── public/              # Static assets
├── server/              # Server-side code
├── types/               # TypeScript type definitions
└── @types/              # Additional type definitions
```

## 🛠️ Getting Started

1. **Prerequisites**

   - Node.js (v18 or higher)
   - pnpm package manager

2. **Installation**

   ```bash
   pnpm install
   ```

3. **Development**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

4. **Build**

   ```bash
   pnpm build
   ```

5. **Production**
   ```bash
   pnpm start
   ```

## 🔧 Key Features

- **Modern React Patterns**: Demonstrates various React patterns and best practices
- **Type Safety**: Full TypeScript implementation
- **Component Architecture**: Well-organized component structure
- **Form Handling**: Advanced form management with validation
- **State Management**: Efficient state handling with Zustand
- **UI Components**: Accessible components built with Radix UI
- **Styling**: Modern styling with Tailwind CSS

## 📚 Available Scripts

- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm start`: Start production server
- `pnpm lint`: Run ESLint

## 🔍 Project Configuration

- **TypeScript**: Configured in `tsconfig.json`
- **ESLint**: Code linting rules in `.eslintrc.json`
- **Tailwind**: Styling configuration in `tailwind.config.ts`
- **Next.js**: Configuration in `next.config.mjs`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Radix UI for accessible components
- Tailwind CSS team for the utility-first CSS framework
- All contributors and maintainers of the dependencies used in this project
