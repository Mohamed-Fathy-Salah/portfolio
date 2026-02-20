export function parseDate(dateStr: string): Date {
    if (dateStr.toLowerCase() === 'present') {
        return new Date();
    }
    // Handle both "-" and "–"
    const cleaned = dateStr.replace('–', '-');
    return new Date(cleaned);
}

export function calculateDuration(startStr: string, endStr: string): { years: number, months: number } {
    const start = parseDate(startStr);
    const end = parseDate(endStr);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    // Add 1 month because usually start of month to end of month is inclusive
    months += 1;
    if (months >= 12) {
        years += Math.floor(months / 12);
        months = months % 12;
    }

    return { years, months };
}

export function formatDuration(years: number, months: number): string {
    const parts = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
    return parts.join(' ') || '0 mos';
}

export function getExperienceDuration(period: string): { years: number, months: number } {
    const parts = period.split(/[-–]/).map(p => p.trim());
    const startStr = parts[0];
    const endStr = parts[1] || 'Present';
    return calculateDuration(startStr, endStr);
}

export function calculateTotalExperience(periods: string[]): string {
    let totalMonths = 0;
    periods.forEach(period => {
        const { years, months } = getExperienceDuration(period);
        totalMonths += (years * 12) + months;
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return formatDuration(years, months);
}
