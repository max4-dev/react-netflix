import moment from "moment";

export const formatDate = (dateString: string) => {
  const date = moment(dateString);
  const year = date.format('YYYY');
  return year;
}