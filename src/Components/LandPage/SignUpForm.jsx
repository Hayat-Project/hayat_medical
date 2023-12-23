import { Group, Input } from '@mantine/core';
function SignUpForm(props) {
    return(
        <>
            <Group justify="center">
                <Input.Wrapper label={props.label1} withAsterisk >
                    <Input size="md" placeholder={props.placeholder1} />
                </Input.Wrapper>
                <Input.Wrapper label={props.label2} withAsterisk >
                    <Input size="md" placeholder={props.placeholder2} />
                </Input.Wrapper>
            </Group>
        </>
    );
}

export default SignUpForm;