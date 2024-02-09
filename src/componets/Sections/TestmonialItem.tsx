
 const TestmonialItem:React.FC<{TestmonialImg:string,TestmonialOwner:string,testmonialText:string}> =({TestmonialImg,TestmonialOwner,testmonialText})=> {

    return (
        <div className="testmonial_item">
            <div className="tm__main">
                <div className="testm_dp_body">
                    <img src={TestmonialImg} alt="" />
                    <h3 className="tm_name">{TestmonialOwner}</h3>
                </div>
                <blockquote>
                    {testmonialText}
                </blockquote>
            </div>
        </div>
    )
}

export default TestmonialItem