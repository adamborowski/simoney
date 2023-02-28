import { createMockCashflowClient } from "./mockCashflowClient";

export const defaultMockCashflowClient = createMockCashflowClient(
  [
    {
      name: "kredyt marzec",
      amount: -3900,
      date: new Date("2023-03-10"),
    },
    {
      name: "kredyt maj",
      amount: -3900,
      date: new Date("2023-05-10"),
    },
    {
      name: "kredyt czerwiec",
      amount: -3900,
      date: new Date("2023-06-10"),
    },
    {
      name: "leasing",
      amount: -4200,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "przedszkole",
      amount: -1200,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "Złotowo śmieci",
      amount: -135,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "Złotowo Woda (znormalizowane)", // todo custom repeat periods!
      amount: -140,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "Złotowo Prąd",
      amount: -320,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "Hynka prąd",
      amount: -100,
      date: new Date("2023-03-10"),
      repeat: "monthly",
    },
    {
      name: "Opał kwiecien",
      date: new Date("2023-04-10"),
      amount: -400,
    },
    {
      name: "Opał maj",
      date: new Date("2023-05-10"),
      amount: -400,
    },
    {
      name: "Orange Światłowód",
      date: new Date("2023-03-10"),
      amount: -97,
      repeat: "monthly",
    },
    {
      name: "Nju mobile",
      date: new Date("2023-03-10"),
      amount: -40,
      repeat: "monthly",
    },
    {
      name: "Netflix Spotify",
      date: new Date("2023-03-10"),
      amount: -17.5,
      repeat: "monthly",
    },
    {
      name: "Hynka Czynsz",
      date: new Date("2023-03-10"),
      amount: -600,
      repeat: "monthly",
    },
    {
      name: "polisy",
      date: new Date("2023-03-10"),
      amount: -(48 + 80.49 + 347.85 + 717.5),
      repeat: "monthly",
    },
    {
      name: "ZUS",
      date: new Date("2023-03-10"),
      amount: -1800,
      repeat: "monthly",
    },
    {
      name: "Karta kredytowa",
      date: new Date("2023-03-10"),
      amount: -6000,
      repeat: "monthly",
    },
    {
      name: "Terapia Adam",
      date: new Date("2023-02-22"),
      amount: -110,
      repeat: "weekly",
    },
    {
      name: "Zajęcia Kasia",
      date: new Date("2023-02-22"),
      amount: -20,
      repeat: "weekly",
    },
    {
      name: "Paliwo",
      date: new Date("2023-03-01"),
      amount: -400,
      repeat: "biweekly",
    },
    {
      name: "500+",
      date: new Date("2023-03-09"),
      amount: 1500,
      repeat: "monthly",
    },
    {
      name: "Codete",
      date: new Date("2023-03-10"),
      amount: 1500,
    },
    {
      name: "Hynka wypłata Ignatowski",
      date: new Date("2023-04-10"),
      amount: -17965,
    },
    {
      name: "Hynka podcięcie drzwi",
      date: new Date("2023-03-15"),
      amount: -2200,
    },
    {
      name: "Hynka szklarz",
      date: new Date("2023-03-15"),
      amount: -7637,
    },
    {
      name: "Dopłata do podatku",
      date: new Date("2023-04-30"),
      amount: -(63180 + 45561 - 53533),
    },
    {
      name: "Zakup opcji",
      date: new Date("2023-03-01"),
      amount: -80000,
    },
    {
      name: "wypłata",
      date: new Date("2023-05-08"),
      amount: 180 * 168 * (1 - 0.12),
      repeat: "monthly",
    },
  ],
  2206 + 202825
);
