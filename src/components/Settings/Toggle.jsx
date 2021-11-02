import "./toggle.css"
export const Toggle = (props) => {
    return(
        <div className = "wrapper">
            <input checked = {props.value} type="checkbox" id="toggle" class="toggle--checkbox" onChange={e => props.cb(e)}/>
            <label for="toggle" class="toggle--label">
                <span class="toggle--label-background"></span>
            </label>
            <div class="background"></div>
        </div>
    )
}