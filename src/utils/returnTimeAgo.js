import moment from '../../node_modules/moment/moment';

export const returnTimeAgo = (date) => {
    const now = new Date();

    return moment(date).from(moment(now));
};
