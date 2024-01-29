const ButtonComponent = (propsObj) => {
    return (
        <div>
            <button className={propsObj.buttonColor}> {propsObj.buttonText} </button>
        </div>
    );
}
export default ButtonComponent;