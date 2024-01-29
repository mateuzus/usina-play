interface Notification {
    id: number;
    content: string;
    data: string; // Representação da data e hora da notificação
    isRead: boolean;
}

const notificationData: Notification[] = [
    {
        id: 1,
        content: "Lembre-se de fazer o treino de cardio hoje!",
        data: "2023-10-28T10:00:00Z",
        isRead: false
    },
    {
        id: 2,
        content: "Sua aula de yoga foi agendada para amanhã às 18:00.",
        data: "2023-10-29T14:30:00Z",
        isRead: false
    }
];

export { Notification, notificationData };