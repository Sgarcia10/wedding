import invitationsData from '@/data/invitations.json';

export interface Invitation {
    id: string;
    name: string;
}

export function getInvitationByCode(inviteCode: string): string | null {
    const invitations = invitationsData as Record<string, string>;
    return invitations[inviteCode] || null;
}

export function getAllInvitations(): Invitation[] {
    const invitations = invitationsData as Record<string, string>;
    return Object.entries(invitations).map(([id, name]) => ({
        id,
        name
    }));
}
