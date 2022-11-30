const locators = {
    LOGIN: {
        EMAIL: "input[type='email']",
        SENHA: ".MuiInputBase-inputAdornedEnd",
        ENTRAR: ".Generics__SNForm-sc-1q5pn8-15"
    },
    MENU: {
        HOME: ".styles__Nav-sc-11w5c5-0 > :nth-child(2)",
        EVENTOS: ".styles__Nav-sc-11w5c5-0 > :nth-child(6)",
        LOGOUT: ".styles__StyledSNBoxCustom-sc-1e26721-7 > .MuiTypography-root",
    },
    EVENTO: {
        NOVO: ":nth-child(2) > .MuiButtonBase-root",
        NOVO_COM_EVENTOS: ":nth-child(6) > .MuiTypography-root > .styles__Container-sc-1j2yznk-3 > .styles__GridMenuItem-sc-1j2yznk-4 > .Generics__SNParagraph-sc-1q5pn8-13",
        NOVO_COM_EVENTOS_NEW: ".styles__StyledToolbarNewButton-sc-symxxl-2",
        TIPO: "#mui-component-select-eventtype",
        NOME: "input[name='eventname']",
        LOCAL: "input[name='eventlocations']",
        CADASTRAR: ".kjlZpA > .MuiGrid-root > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label",
        DELETAR: ".bCKNrI > .MuiGrid-root > :nth-child(1)",
        CONFIRMAR: ".styles__DivPartials-sc-hagasa-1:nth-child(2) .MuiButton-label",
        MENSAGEM: ".MuiAlert-message"
    }
}

export default locators;