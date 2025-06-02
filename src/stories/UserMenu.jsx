
/* UserProfileAside.jsx */
import React, { useState } from "react";

// 'logo' prop is required, but you can provide src when using
const UserProfileAside = ({
  asideBgColor = "#fff",
  asideTextColor = "#232324",
  buttonBgColor = "#7837F3",
  buttonVariant = "primary",
  isOpen = true,
  onClose,
  logo = "https://placehold.co/64x64?text=LOGO", // replace with actual logo if needed
  brandName = <>Центр <br />"Говори"</>,
}) => {
  // Local state for form fields and validation messages
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validation logic
  const validate = () => {
    let errs = {};
    if (!fullName.trim()) errs.fullName = "Поле обязательно";
    if (newPassword && newPassword !== confirmPassword) errs.confirmPassword = "Пароли не совпадают";
    if (confirmPassword && !newPassword) errs.confirmPassword = "Введите новый пароль";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <aside
      className="close-aside fixed top-0 left-0 h-full z-50 shadow-xl flex flex-col"
      aria-label="User Profile Aside"
      style={{
        background: asideBgColor,
        color: asideTextColor,
        width: "100%",
        maxWidth: "380px",
        minWidth: "270px",
        transition: "transform 0.3s",
        fontFamily: "inherit",
      }}
    >
      {/* Header Section */}
      <div className="flex flex-row items-center gap-4 px-6 py-7 border-b"
        style={{ borderColor: "#eee" }}>
        <button
          tabIndex={0}
          aria-label="Закрыть профиль"
          className="transition hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-xl w-9 h-9 flex items-center justify-center"
          style={{ color: asideTextColor, fontSize: 24, border: "none", background: "transparent" }}
          onClick={onClose}
        >
          <span aria-hidden="true" className="bx bx-arrow-to-left-stroke">&#8592;</span>
        </button>
        <a href="/" className="flex-shrink-0" aria-label="На главную">
          <img className="logo w-12 h-12 rounded-full object-cover" src={logo} alt="Logo" />
        </a>
        <span className="font-bold text-lg leading-tight whitespace-nowrap" style={{ color: asideTextColor }}>
          {brandName}
        </span>
      </div>

      {/* Form Section */}
      <form
        className="flex flex-col gap-5 px-6 py-8 flex-1 overflow-auto"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Full Name */}
        <label htmlFor="fullName" className="font-medium text-base">
          ФИО<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="fullName"
          required
          className="rounded-lg border px-4 py-2 outline-none transition focus:border-violet-600"
          style={{
            borderColor: errors.fullName ? "#dc2626" : "#e5e7eb",
            color: asideTextColor,
          }}
          placeholder="ФИО*"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          autoComplete="name"
        />
        {errors.fullName && (
          <span className="text-xs text-red-600 mb-1">{errors.fullName}</span>
        )}

        {/* Phone Number */}
        <label htmlFor="phone" className="font-medium text-base">
          Телефон
        </label>
        <input
          id="phone"
          className="rounded-lg border px-4 py-2 outline-none transition focus:border-violet-600"
          style={{ color: asideTextColor, borderColor: "#e5e7eb" }}
          placeholder="Ваш телефон"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          autoComplete="tel"
        />

        {/* New Password */}
        <label htmlFor="newPassword" className="font-medium text-base">
          Новый пароль
        </label>
        <input
          id="newPassword"
          className="rounded-lg border px-4 py-2 outline-none transition focus:border-violet-600"
          style={{ color: asideTextColor, borderColor: "#e5e7eb" }}
          placeholder="Новый пароль"
          type="password"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
          autoComplete="new-password"
        />

        {/* Confirm Password */}
        <label htmlFor="confirmPassword" className="font-medium text-base">
          Подтвердите пароль<span className="text-red-500 ml-1">*</span>
        </label>
        <input
          id="confirmPassword"
          required
          className="rounded-lg border px-4 py-2 outline-none transition focus:border-violet-600"
          style={{
            borderColor: errors.confirmPassword ? "#dc2626" : "#e5e7eb",
            color: asideTextColor,
          }}
          placeholder="Подтвердите пароль*"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          autoComplete="new-password"
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-600 mb-1">{errors.confirmPassword}</span>
        )}

        <div className="button-container mt-5 flex">
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-base font-semibold transition-colors duration-150 shadow-md 
              ${buttonVariant === "primary"
                ? "text-white"
                : "border-2 border-violet-600 text-violet-700 hover:bg-violet-50"
              }`}
            style={{
              background: buttonVariant === "primary" ? buttonBgColor : "transparent",
              color: buttonVariant === "primary" ? "#fff" : buttonBgColor,
              borderColor: buttonBgColor,
            }}
            disabled={submitted}
          >
            {submitted ? "Сохранено!" : "Подтвердить изменения"}
          </button>
        </div>
      </form>
    </aside>
  );
};

export default UserProfileAside;

/* UserProfileAside.stories.jsx */