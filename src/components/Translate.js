import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

//

const options = [
    {
        label: "Spanish",
        value: "es",
    },
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];
const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div className="translate-form">
            <div>
                <div className="field">
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">English</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="English phrase"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Spanish</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            placeholder="Translated phrase"
                            text={<Convert text={text} language={language} />}
                            language={language}
                        />
                    </InputGroup>
                </div>
            </div>
            <Dropdown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;
