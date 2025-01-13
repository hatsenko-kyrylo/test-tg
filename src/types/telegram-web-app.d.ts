interface TelegramWebAppUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
}

interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
        user?: TelegramWebAppUser; // Может быть undefined
    };
    ready: () => void;
    close: () => void;
    setBackgroundColor: (color: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onEvent: (event: string, callback: (data: any) => void) => void; // Обработка событий
}

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}

export {}; // Для того чтобы файл был модулем
