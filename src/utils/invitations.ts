import invitationsData from '@/data/invitations.json';

export interface Invitation {
    id: string;
    name: string;
}

export function getInvitationByCode(inviteCode: string): string | null {
    const invitation = (invitationsData as Record<string, { name: string; friendly: string }>)[inviteCode];
    return invitation ? invitation.friendly : null;
}

export function getAllInvitations(): Invitation[] {
    const invitations = invitationsData as Record<string, { name: string; friendly: string }>;
    return Object.entries(invitations).map(([id, invitation]) => ({
        id,
        name: invitation.name
    }));
}
