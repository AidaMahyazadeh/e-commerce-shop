import './directory-item.styles.scss';

function DirectoryItem(props){
return (
    <div className='directory-item-container'>
    <div className="background-image" style={{backgroundImage :`url(${props.category.imageUrl})`}}/>
   <div className='body'>
     <h2>{props.category.title}</h2>
     <p>Shop Now</p>
   </div>
 </div>

)
}

export default DirectoryItem;