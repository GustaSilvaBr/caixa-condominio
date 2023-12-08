export default {
    getFirstDateDay(date: Date): Date {
        const novaData = new Date(date);
        novaData.setDate(1);
        return novaData;
    },
    getLastDayOfMonth(date: Date): Date {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Ajusta o mês para o próximo e define o dia para 0
        const lastDayOfMonth = new Date(year, month + 1, 0);

        return lastDayOfMonth;
    },
    getDateFormattedToInput(date: Date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é base 0, então somamos 1
        const year = String(date.getFullYear());

        return `${year}-${month}-${day}`;
    }


}