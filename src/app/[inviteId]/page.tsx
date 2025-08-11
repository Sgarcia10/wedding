import { notFound } from 'next/navigation';
import { getInvitationByCode } from '@/utils/invitations';
import SiteHostsPage from '@/components/SiteHostsPage';
import { Metadata } from 'next';

export async function generateMetadata(
    { params }: { params: { inviteId: string } }
): Promise<Metadata> {
    const inviteName = getInvitationByCode(params.inviteId);

    if (!inviteName) {
        return {
            title: "Invitación no encontrada - Juanis & Santi",
        };
    }

    return {
        title: `Invitación para ${inviteName} - Juanis & Santi`,
        description: `¡Hola ${inviteName}! Con mucha alegría queremos invitarte a celebrar nuestra boda. 06 · 12 · 2025 | Honda, Tolima`,
    };
}

export default async function InvitePage({ params }: { params: { inviteId: string } }) {
    const inviteName = getInvitationByCode(params.inviteId);

    if (!inviteName) {
        notFound();
    }

    return <SiteHostsPage inviteName={inviteName} />;
}
