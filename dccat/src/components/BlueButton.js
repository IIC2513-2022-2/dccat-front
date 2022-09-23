function BlueButton(props){
    return <div>
         <a href={props.link}>
              <button className="Button">{props.title}</button>
          </a>
    </div>
  }
  
export default BlueButton;