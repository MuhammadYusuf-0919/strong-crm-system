export const statusIcons = (status: string): string => {
    // Success status icons
    const successIcons: Record<string, string> = {
        paid: 'mdi:check',
        active: 'mdi:check-circle',
        completed: 'mdi:check-all',
    };

    // Warning status icons
    const warningIcons: Record<string, string> = {
        pending: 'mdi:chart-pie',
    };

    // Error status icons
    const errorIcons: Record<string, string> = {
        banned: 'mdi:cancel',
        overdue: 'mdi:clock-alert', // 'mdi:information-outline'
        cancelled: 'mdi:cancel',
        'not-connect': 'mdi:disconnected',
    };

    // Info status icons
    const infoIcons: Record<string, string> = {
        published: 'mdi:file-document-edit',
        sent: 'mdi:email-send',
        meeting: 'mdi:calendar-clock',
        Downloaded: 'mdi:arrow-down',
    };

    // Secondary status icons
    const secondaryIcons: Record<string, string> = {
        sent: 'mdi:email-send',
        inactive: 'mdi:account-off',
        rejected: 'mdi:cancel',
    };

    // Default status icons
    const defaultIcons: Record<string, string> = {
        all: 'mdi:circle',
        draft: 'mdi:file-document-edit', // 'mdi:content-save-outline'
        'no status yet': 'mdi:circle-outline',
        refund: 'mdi:arrow-left',
    };

    // Check and return the corresponding icon for the status
    if (successIcons.hasOwnProperty(status)) return successIcons[status];
    if (warningIcons.hasOwnProperty(status)) return warningIcons[status];
    if (errorIcons.hasOwnProperty(status)) return errorIcons[status];
    if (infoIcons.hasOwnProperty(status)) return infoIcons[status];
    if (secondaryIcons.hasOwnProperty(status)) return secondaryIcons[status];
    if (defaultIcons.hasOwnProperty(status)) return defaultIcons[status];

    // If the status is not found, return a default icon
    return 'mdi:help-circle';
};