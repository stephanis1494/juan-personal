const ToggleOnIcon = ({ color = 'white', size = '16', style = {}, ...props}) => {
    return ( 
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            class="bi bi-toggle-on" 
            viewBox="0 0 16 16"
            {...props}
        >
        
            <path 
                d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                fill={color}
                style={{ transition: 'fill 150ms ease' }}
            />
        </svg>
     );
}
 
export default ToggleOnIcon;