module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
            'xs' : {'max':'768px'}
            },
           
            colors: {
                "azul-claro": "#0CB7F2",
                "azul-oscuro": "#0370b9",
                "amarillo": "#FFC803"
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite'

            }
        },
    },
    variants: {
        extend: {
            animation: ['responsive', 'hover', 'group-hover'],
            fontSize: ['responsive', 'hover', 'group-hover'],
        }
    }
}
