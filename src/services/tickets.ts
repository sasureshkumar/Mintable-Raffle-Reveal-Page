import SilverCard from '../assets/images/cards/silver.svg';
import GoldCard from '../assets/images/cards/gold.svg';
import DiamondCard from '../assets/images/cards/diamond.svg';

export const getTickets = () =>
    Promise.resolve([
        {
            id: 'silver',
            available: 1,
            name: 'Silver',
            image: SilverCard,
        },
        {
            id: 'gold',
            name: 'Gold',
            available: 3,
            image: GoldCard,
        },
        {
            id: 'diamond',
            available: 4,
            name: 'Diamond',
            image: DiamondCard,
        },
    ]);
