import { useParams } from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
function AddComment() {
  const { id } = useParams();
  var navigate=useNavigate();
  let location = useLocation();
  const onSubmit = (evt) => {
  
  };
  if(comment.isSuccess){
    return navigate(`/venue/${id}`);
  } else
  return (
    <div>
        <div className="row page-header">
          <div className="col-lg-12 ">
            <h1> {location.state.name} mekanına yorum yap</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <form
              className="form-horizontal"
              id="yorumEkle"
              onSubmit={(evt) => onSubmit(evt)}
            >
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  Ad Soyad:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="adsoyad"
                    placeholder="Ad Soyad"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-10 col-sm-2 control-label">
                  Puan:
                </label>
                <div className="col-xs-12 col-sm-2">
                  <select
                    className="form-control input-sm"
                    id="puan"
                    name="puan"
                  >
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Yorum:</label>
                <div className="col-sm-10">
                  <textarea
                    className="review form-control"
                    name="yorum"
                    rows={5}
                  />
                </div>
              </div>
              <button className="btn btn-default pull-right">Yorum Ekle</button>
            </form>
          </div>
        </div>
    </div>
  );
}
export default AddComment;
