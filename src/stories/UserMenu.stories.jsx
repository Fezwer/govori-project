import React, { useState } from "react";
import UserProfileAside from "./UserMenu";

export default {
  title: "UserProfileAside",
  component: UserProfileAside,
  argTypes: {
    asideBgColor: { control: 'color', description: 'Фоновый цвет aside' },
    asideTextColor: { control: 'color', description: 'Цвет текста внутри aside' },
    buttonBgColor: { control: 'color', description: 'Цвет кнопки подтверждения' },
    buttonVariant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Вариант кнопки (primary/secondary)'
    },
    isOpen: { control: 'boolean', description: 'Открыт ли aside' },
    logo: { control: 'text', description: 'Путь к логотипу' },
    brandName: { control: 'text', description: 'Название бренда' },
  },
};

export const Default = (args) => {
  const [open, setOpen] = useState(args.isOpen ?? true);
  return (
    <div style={{position: 'relative', minHeight: 600, background: '#f3f4f6'}}>
      <button
        onClick={() => setOpen(true)}
        style={{margin: 16, padding: '10px 22px', borderRadius: 8, background: '#7837F3', color: '#fff', fontWeight: 600, border: 'none', boxShadow: "0 1px 6px #bfb7ee"}}
      >
        Открыть профиль
      </button>
      <UserProfileAside {...args} isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

Default.args = {
  asideBgColor: "#fff",
  asideTextColor: "#232324",
  buttonBgColor: "#7837F3",
  buttonVariant: "primary",
  isOpen: true,
  logo: "https://placehold.co/64x64?text=LOGO",
  brandName: <>Центр <br />"Говори"</>
};

export const SecondaryButton = (args) => <Default {...args} buttonVariant="secondary" />;
SecondaryButton.args = {
  ...Default.args,
  buttonVariant: "secondary",
};

export const CustomColors = (args) => <Default {...args} asideBgColor="#fcf6ff" buttonBgColor="#43a4ff" />;
CustomColors.args = {
  ...Default.args,
  asideBgColor: "#fcf6ff",
  buttonBgColor: "#43a4ff",
  buttonVariant: "primary"
};

