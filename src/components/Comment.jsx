import Rating from "./Rating";
const Comment = ({ commentList }) => {
 var formatDate=function(date){
    var date = new Date(date);
    var months= [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs","Haziran","Temmuz", "Ağustos","Eylül","Ekim","Kasım", "Aralık" ];
    var dateInfo = date.getDate();
    var monthInfo = months[date.getMonth()];
    var yearInfo = date.getFullYear();
    var result=dateInfo + ' ' + monthInfo + ' ' + yearInfo;
    return result
  }
      return commentList.map((comment, index) => (
          <div key={index} className="row">
            <div className="review">
                <div className="well well-sm review-header ">
                    <span className="rating"><Rating puan={comment.rating}/></span>
                    &nbsp;
                    <span className="review-author">{comment.name}</span>
                    &nbsp;
                    <small className="reviewTimestamp">{formatDate(comment.date)}</small>
                </div>
                <div className="col-xs-12 ">{comment.text}</div>
            </div>
          </div>
      ));
    }
  export default Comment;
  