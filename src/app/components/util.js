
MONTHS = ['Jan','Feb','Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'];

export function formatDateForArticle(incomingDate){
    const freshDate = new Date(incomingDate);
    const monthNumber = freshDate.getMonth();
    const month =  MONTHS[monthNumber];
    const day = freshDate.getDate();
    const formattedDate = (day > 9) ? day : ('0' + day);
    const year = freshDate.getFullYear();
    return `${month} ${formattedDate}, ${year}`;
}