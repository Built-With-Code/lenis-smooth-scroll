type CardData = {
  title: string;
  description?: string;
  detailContent?: string;
};

type SectionData = {
  title: string;
  tintColor: string;
  cards: { [key: string]: CardData };
};

// ------------------------- //

const PasswordsSectionData: SectionData = {
  title: "Passwords app",
  tintColor: "#34b4a7",
  cards: {
    app: {
      title: "All your credentials in one place",
      description:
        "From passwords to verifications and security alerts, find them all securely stored in the Passwords app.",
      detailContent:
        "Backed by secure end-to-end encryption and seamless syncing, the Passwords app safely stores all your credentials. It lets you filter and sort accounts by recently created, credential type, or whether an account is in a shared group, to quickly find accounts you’re looking for.",
    },
    sync: {
      title: "Securely synced across devices and apps",
      detailContent:
        "Access the Passwords app on iPhone, iPad, Mac, and Apple Vision Pro, and on Windows with the iCloud for Windows app. All the passwords sync securely across your devices, and if you use AutoFill, your passwords will automatically be added to the Passwords app.",
    },
  },
};

const SafariSectionData: SectionData = {
  title: "Safari",
  tintColor: "#0e90db",
  cards: {
    highlights: {
      title: "Introducing Highlights",
      description:
        "Safari will automatically detect relevant information on a page and highlight it as you browse. Highlights display helpful information like directions and quick links to learn more about people, music, movies, and TV shows.",
    },
    reader: {
      title: "A smarter, redesigned Reader",
      description:
        "With a table of contents and high-level summary, get the gist of an article before reading on.",
    },
  },
};

const WalletSectionData: SectionData = {
  title: "Wallet",
  tintColor: "#d41c9d",
  cards: {
    tap: {
      title: "Introducing Tap to Cash",
      detailContent:
        "Whether you’re at a garage sale or paying someone back for dinner, Tap to Cash makes in-person payments quick and easy without having to share phone numbers or email addresses. Securely authenticate with Face ID, Touch ID, or passcode, then bring your devices together to send Apple Cash.",
    },
  },
};

export const AllSectionData: { [key: string]: SectionData } = {
  safari: SafariSectionData,
  passwords: PasswordsSectionData,
  wallet: WalletSectionData,
};
