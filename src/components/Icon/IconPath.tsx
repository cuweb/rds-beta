import React from 'react'

interface IconPathProps {
    icon: string
}

const IconPath: React.FC<IconPathProps> = ({ icon }): JSX.Element => {
    if (icon === 'cushield') {
        return (
            <g fill='none' fillRule='nonzero'>
                <g fill='#FFF'>
                    <path d='M65.348 61.022c.205-.54.399-1.086.578-1.637 1.45-4.3 2.17-8.873 2.13-13.667 0 0-.025-29.332-.124-39.652-.87-.25-1.744-.483-2.622-.7a49.886 49.886 0 0 0-2.665-.63C54.18 2.879 44.36 1.872 36.084 1.628l.02.04a51.55 51.55 0 0 0-2.588.02l.053-.107C24.15 1.536 12.716 3.118 3.563 5.55c-.835.193-1.475.368-1.864.516-.02 2.115-.038 5.034-.053 8.33-.07 14.385-.071 31.322-.071 31.322-.055 6.593 1.31 12.77 4.073 18.38.21.433.43.863.66 1.29.065.122.121.246.188.368l.003-.013c.316.575.646 1.148.998 1.714h-.001l.018.028a39.392 39.392 0 0 0 1.966 2.87c.37.481.745.951 1.124 1.41.28.342.568.672.856 1.004.09.103.177.21.266.311 5.318 6.026 11.725 10.45 18.803 13.59.269.132.532.264.803.395.02.01.244.086.567.195.638.263 1.433.496 2.149.72l.766.256c.855-.312 2.053-.617 2.933-.983l.57-.19c.546-.255 1.078-.51 1.604-.766a56.668 56.668 0 0 0 9.33-5.408l.155-.112c.246-.178.492-.355.737-.538 3.744-2.76 6.964-5.926 10.007-9.884 2.248-2.992 3.924-6.011 5.148-9.202l.05-.13z' />
                    <path d='M34.836 89.908l-1.647-.542c-.62-.193-1.263-.392-1.838-.626-.573-.193-.61-.208-.712-.259l-.799-.392c-7.582-3.363-14.09-8.069-19.291-13.963l-.274-.32c-.32-.37-.605-.697-.882-1.034-.391-.474-.777-.957-1.158-1.453-.37-.491-.729-.991-1.076-1.499l-.062.264-1.978-3.563c-.047-.085-.09-.173-.133-.26l-.062-.121c-.239-.446-.47-.896-.69-1.351C1.37 58.978-.056 52.553.002 45.703c0-.156.001-17.092.071-31.315.015-3.3.032-6.222.053-8.338l.01-1.081 1.008-.381c.45-.17 1.126-.36 2.065-.577C12.505 1.541 24.013 0 33.193 0l2.918.013-.018.035h.037c9.195.273 18.983 1.419 26.852 3.146 1.016.214 1.942.433 2.736.646a76.24 76.24 0 0 1 2.65.707l1.127.326.011 1.176c.098 10.21.123 39.373.124 39.665.04 4.928-.705 9.702-2.213 14.176a37.632 37.632 0 0 1-.598 1.694l-.06.157c-1.286 3.352-3.04 6.488-5.352 9.564-3.137 4.08-6.417 7.32-10.333 10.207-.21.157-.433.318-.655.479l-.265.19a58.471 58.471 0 0 1-9.574 5.55c-.505.246-1.045.503-1.598.761l-.164.066-.52.175c-.57.232-1.207.43-1.822.62-.4.124-.79.244-1.123.366l-.517.189zm-2.887-4.3c.087.032.247.085.45.153l.098.037c.456.19 1.049.373 1.62.55l.69.22c.236-.076.485-.153.738-.232.567-.176 1.154-.358 1.601-.543l.589-.201c.501-.235 1.001-.474 1.5-.716a55.414 55.414 0 0 0 9.1-5.272l.244-.176c.209-.15.416-.3.622-.455 3.683-2.714 6.763-5.757 9.704-9.583 2.123-2.826 3.738-5.71 4.926-8.805l1.5.482-1.47-.56c.213-.565.398-1.086.57-1.614 1.4-4.156 2.09-8.58 2.052-13.164 0-.294-.025-27.366-.114-38.461a103.2 103.2 0 0 0-1.44-.373 48.249 48.249 0 0 0-2.606-.615c-7.358-1.615-16.428-2.71-25.08-3.036h-1.164c-.31-.006-.62-.009-.93-.009l-.325.002c-.401.004-.825.014-1.259.027l-2.634.082.08-.161c-8.522.22-18.672 1.667-27.045 3.891-.274.063-.507.12-.705.171-.017 1.967-.03 4.432-.043 7.156-.069 14.217-.07 31.144-.07 31.314-.052 6.364 1.263 12.308 3.91 17.68.203.42.415.833.635 1.243.025.046.05.094.074.143l.11.197c.336.612.649 1.15.955 1.642l.056.093c.578.923 1.195 1.82 1.848 2.69.348.452.712.908 1.08 1.354.261.316.528.623.794.93l.296.347c4.898 5.549 11.042 9.987 18.26 13.19l.783.383z' />
                </g>
                <g fill='#FFF'>
                    <path d='M34.813 88.236l3.504-1.174c9.565-4.455 16.015-9.138 21.832-16.706 5.51-7.332 7.629-14.819 7.906-24.638 0-.001-.132-31.714-.189-39.442-3.392-1.947-23.791-4.699-33.057-4.616' />
                    <path d='M35.311 89.734l-.996-2.996 3.419-1.146c9.653-4.506 15.79-9.204 21.169-16.2 5.029-6.692 7.299-13.79 7.58-23.72-.002-.249-.122-29.232-.182-38.365-4.61-1.631-22.409-4.173-31.477-4.068L34.795.081c9.3-.084 30.055 2.645 33.853 4.823l.785.451.008.908c.055 7.453.188 39.312.188 39.454-.3 10.681-2.76 18.321-8.223 25.59-5.737 7.463-12.232 12.439-22.426 17.187l-.164.065-3.505 1.175z' />
                </g>
                <g fill='#FFF'>
                    <path d='M34.81 1.66c-9.918.09-29.901 3.194-33.111 4.406-.123 15.086-.124 39.65-.124 39.65.238 9.377 2.4 17.317 7.905 24.64 5.822 7.578 12.76 12.34 21.852 16.708.083.04 3.482 1.172 3.482 1.172' />
                    <path d='M34.318 89.735c-3.49-1.164-3.551-1.192-3.66-1.244C20.4 83.563 13.696 78.429 8.234 71.32 2.877 64.193.264 56.074.002 45.756c0-.286.002-24.785.123-39.705l.009-1.084 1.01-.38C4.824 3.2 25.02.168 34.796.08l.028 3.158c-8.872.08-26.497 2.707-31.562 4.004-.112 14.98-.114 38.235-.114 38.474.247 9.718 2.588 17.036 7.587 23.687 5.188 6.753 11.34 11.455 21.208 16.203.369.13 2.22.748 3.366 1.13l-.99 2.998z' />
                </g>
                <path
                    fill='#282828'
                    d='M56.808 45.993l-.837-.274-.182-.878-1.438-.563c-3.914-1.366-7.927-2.467-12.07-2.864-2.669-.256-5.37-.055-7.421 1.27-2.044-1.326-4.744-1.526-7.413-1.27-4.145.397-8.163 1.497-12.083 2.864l-1.439.563-.185.878-.839.274-4.687 19.653c2.643-.488 8.09-1.281 11.108-1.595 3.754-.421 6.952-.58 11.19-.437-.018.17-.068.313.038.483.491.472 1.48.427 2.271.498.822.032 1.187.045 1.996.051.807.006 1.176-.019 1.995-.051.79-.071 1.782-.026 2.275-.498.105-.17.057-.313.038-.483 4.24-.143 7.44.016 11.19.437 3.016.314 8.459 1.107 11.103 1.595l-4.61-19.653zM34.294 60.786c-2.183-1.174-4.906-1.35-7.559-1.2-5.666.366-10.76 1.616-16.095 3.44l4.082-17.777c4.096-1.565 8.402-2.808 12.854-3.185 2.916-.18 5.425.19 6.869 1.23l-.151 17.492zm8.624-1.199c-2.65-.15-5.375.025-7.562 1.2l-.08-17.49c1.446-1.041 3.959-1.41 6.873-1.231 4.452.378 8.751 1.62 12.843 3.184L59 63.028c-5.326-1.826-10.415-3.076-16.081-3.44z'
                />
                <path
                    fill='#282828'
                    d='M36.084 1.627l4.652 9.388.013.031c.019.04.08.167.247.458.155-.06.306-.12.456-.183.21-.118 7.793-4.449 7.793-4.449l-3.688 18.183 7.523-7.945 3.165 6.042c.104-.016.825-.138.825-.138l-.41.069 9.247-2.552-2.94 10.416s-.04.07-.056.089l.007.003-.038.12.028-.041s-.242.735-.352 1.063c-.044.135-.146.466-.174.55l4.735 2.452-9.837 8.752.107.51.81.267 4.932 21.046c3.349-6.04 4.984-12.794 4.925-20.042 0 0-.025-29.331-.123-39.652-9.418-2.717-21.777-4.14-31.847-4.437m-1.27 86.61c.871-.318 2.107-.63 2.992-1.006 8.633-3.601 16.324-9.04 22.343-16.875a40.259 40.259 0 0 0 1.983-2.898l-1.014-.187c-2.72-.502-8.156-1.284-10.988-1.58a75.53 75.53 0 0 0-1.099-.115c-.302-.03-.603-.06-.898-.087h-.012a68.004 68.004 0 0 0-7.842-.253l-.057.055c-.837.803-2.001.87-2.852.92l-.473.032-.481.02-1.613.035-2.047-.052-.494-.034c-.85-.05-2.015-.118-2.852-.923l-.054-.053a70.548 70.548 0 0 0-6.217.125l-.02.003c-.188.012-.374.024-.562.04l-.037.002-.55.044a1.82 1.82 0 0 0-.088.008c-.169.015-.337.028-.508.044l-.165.016-.446.042-.288.028-.338.036c-.212.022-.427.047-.646.069-2.825.295-8.263 1.078-10.979 1.579l-1.016.185c.618.995 1.28 1.962 1.984 2.899 6.02 7.833 13.71 13.273 22.342 16.875.885.376 2.122.687 2.992 1.005M33.57 1.58C23.499 1.533 11.126 3.344 1.699 6.066c-.1 10.32-.124 39.65-.124 39.65-.06 7.249 1.575 14.001 4.92 20.04l5.02-21.047.813-.265.094-.443-9.91-8.818 4.734-2.451-.196-.623-.266-.806a.86.86 0 0 0-.029-.035L3.723 20.53l9.247 2.552-.4-.066c.08.014.717.119.817.137l3.165-6.044 7.52 7.943-3.688-18.179 7.796 4.448c.15.062.3.123.455.183a6.69 6.69 0 0 0 .244-.451l.015-.036 4.136-8.341.54-1.096'
                />
                <path
                    fill='#BF112B'
                    d='M9.312 33.06c-.034.493-.494 1.052-.759 1.249l-2.538 1.314 8.228 7.32.551-.215.03-.01c4.736-1.652 8.698-2.588 12.467-2.948 3.1-.297 5.587.044 7.57 1.028 1.989-.984 4.477-1.325 7.577-1.028 3.768.36 7.725 1.297 12.454 2.948l.03.01.49.193 8.201-7.298-2.538-1.314c-.262-.197-.723-.756-.756-1.249-.01-.147-.027-.131-.041-.088l.007-.041c.048-.292 0-.231.264-1.019-.021.02.484-1.5.497-1.512l1.974-6.994-5.83 1.608c-.32.02-.614.132-.928.177-.548.078-.986.152-1.314-.21l-2.34-4.466-6.656 7.028-.528.526c-1.12.854-2.703-.066-2.01-2.496l2.998-14.78-4.084 2.331c-.55.23-1.024.42-1.78.657-.25.079-.5-.083-.668-.242-.29-.476-.78-1.293-.949-1.663l-4.115-8.31-4.12 8.31c-.166.371-.656 1.186-.947 1.663-.167.158-.418.32-.668.242a18.665 18.665 0 0 1-1.78-.657l-4.085-2.331 2.998 14.78c.691 2.43-.89 3.35-2.01 2.496l-.527-.526-6.655-7.028-2.34 4.466c-.33.362-.77.288-1.314.21-.314-.045-.608-.157-.927-.177L6.61 23.406 8.584 30.4c.013.013.52 1.533.496 1.512.263.788.216.727.263 1.019a.416.416 0 0 0 .006.033c-.012-.037-.029-.041-.037.096z'
                />
                <path
                    fill='#282828'
                    d='M32.05 47.638c-2.328-.991-5.03-.686-7.49-.259-2.906.506-4.256.873-7.456 1.948l.18-.8s4.03-1.575 9.473-2.214c0 0 3.128-.396 5.293.566v.759zm0 3.536c-2.328-.99-5.03-.686-7.49-.258-2.906.506-4.988.827-8.283 1.928l.18-.8s4.858-1.556 10.3-2.195c0 0 3.13-.396 5.294.566v.759zm0 3.583c-2.328-.99-5.03-.686-7.49-.258-2.906.504-5.857 1.285-9.195 2.406l.18-.8s5.77-2.034 11.212-2.673c0 0 3.13-.397 5.294.565v.76zm5.446-7.12c2.328-.99 5.03-.685 7.49-.258 2.905.506 4.255.873 7.455 1.948l-.18-.8s-4.03-1.575-9.472-2.214c0 0-3.129-.396-5.293.566v.759zm0 3.537c2.328-.99 5.03-.686 7.49-.258 2.905.506 4.988.827 8.283 1.928l-.18-.8s-4.857-1.556-10.3-2.195c0 0-3.129-.396-5.293.566v.759zm0 3.583c2.328-.99 5.03-.686 7.49-.258 2.905.504 5.858 1.285 9.193 2.406l-.178-.8s-5.77-2.034-11.213-2.673c0 0-3.129-.397-5.293.565v.76z'
                />
                <path
                    fill='#FFF'
                    d='M136.002 20.31h-2.18c-.28-10.693-4.577-15.636-14.532-15.636-14.315 0-16.277 12.436-16.277 24.582 0 10.254 1.162 24.655 15.04 24.655 10.1 0 15.42-6.956 15.695-17.31h2.18V51c-6.54 3.564-12.207 5.164-18.093 5.164-15.767 0-24.415-11.272-24.415-26.909 0-15.492 9.664-26.837 25.433-26.837 5.74 0 11.844 1.745 17.148 4.219V20.31zm16.49 13.963c2.98-.726 5.232-1.381 7.993-2.326v-3.055c0-5.018-.871-8.29-5.667-8.29-3.633 0-5.851 1.09-5.851 5.89 0 2.837-1.09 4.16-3.634 4.16-1.888 0-3.594-.887-3.594-3.07 0-6.981 7.049-8.8 12.861-8.8 11.117 0 13.297 4.582 13.297 10.619v18.473c0 5.528 1.671 5.601 5.74 5.601v1.818h-5.522c-4.07 0-6.903-.364-8.066-4.727-2.834 4.363-6.394 5.6-11.19 5.6-7.557 0-9.955-3.928-9.955-10.545 0-6.037 3.124-8.873 9.227-10.328l4.362-1.02zm.437 1.964c-4.36 1.309-5.74 2.91-5.74 9.31 0 4.436.799 8.363 4.723 8.363 6.321 0 8.574-8 8.574-12.945v-6.983l-7.557 2.255z'
                />
                <path
                    fill='#FFF'
                    d='M178.79 21.474h-6.25v-1.82h13.66v8.365h.147c1.525-4.219 4.65-9.237 10.172-9.237 4.288 0 6.613 2.764 6.613 6.982 0 2.91-1.163 4.874-3.779 4.874-1.962 0-3.632-1.456-3.632-3.71 0-1.017.363-2.763.363-3.708 0-1.018-.728-1.819-1.818-1.819-3.778 0-8.066 8.292-8.066 16.146v15.928h6.032v1.818h-19.589v-1.818h6.146V21.474z'
                />
                <path
                    fill='#FFF'
                    d='M200.993 3.291h13.66v50.183h6.25v1.818h-19.91v-1.818h6.249V5.109h-6.249z'
                />
                <path
                    fill='#FFF'
                    d='M227.496 35.218v.583c0 10.181 1.381 18.109 10.755 18.109 6.612 0 9.955-4.072 11.844-9.309l1.599.582c-3.124 8.436-8.068 10.98-16.06 10.98-10.899 0-16.42-8.435-16.42-18.69 0-9.819 6.321-18.691 16.93-18.691 9.301 0 15.622 6.691 15.622 16.436h-24.27zm15.55-2.254c0-5.236-.29-12.363-7.702-12.363-6.25 0-7.848 7.855-7.848 12.363h15.55zm8.808-13.31h5.013v-9.67h7.412v9.672h8.065v1.818h-8.065v25.31c0 4.291.87 6.327 3.851 6.327 2.76 0 3.924-2.036 5.086-4.364l1.67.728-.652 1.308c-1.454 2.619-3.925 4.947-9.156 4.947-7.557 0-8.21-4.291-8.21-8.946v-25.31h-5.014v-1.82z'
                />
                <path
                    fill='#FFF'
                    d='M291.024 18.782c12.933 0 16.93 11.346 16.93 18.692 0 7.345-3.997 18.69-16.93 18.69s-16.932-11.345-16.932-18.69c0-7.346 3.998-18.692 16.932-18.692zm0 35.565c8.574 0 8.646-9.236 8.646-16.873 0-7.637-.072-16.873-8.646-16.873-8.575 0-8.647 9.236-8.647 16.873 0 7.637.072 16.873 8.647 16.873z'
                />
                <path
                    fill='#FFF'
                    d='M314.15 53.474v-32H307.9v-1.82h13.66v6.837h.147c2.252-4.945 6.612-7.71 12.57-7.71 7.122 0 10.682 2.982 10.682 10.255v24.437h5.74v1.819h-18.892v-1.819h5.74V29.401c0-4-.728-8-5.814-8-6.756 0-10.171 6.399-10.171 13.164v18.91h5.74v1.817H307.9v-1.818h6.249zM114.79 80.888c0 3.764-2.528 6.559-7.382 6.559-4.88 0-7.407-2.795-7.407-6.56v-9.804h3.864v9.67c0 1.96 1.487 3.448 3.543 3.448 2.03 0 3.517-1.488 3.517-3.448v-9.67h3.865v9.805zm14.712-9.805h5.252l7.456 11.09h.05v-11.09h3.865v15.959h-5.055l-7.655-11.36h-.048v11.36h-3.865V71.083zm31.408 0h3.864v15.959h-3.864V71.083zm16.67 0h4.41l4.334 10.459h.05l4.41-10.459h4.137l-7.235 15.959h-3.095l-7.012-15.959zm28.855 0h11.915v3.246h-8.05v2.975h7.605v3.246h-7.606v3.246h8.497v3.245h-12.362V71.083zm26.85 0h6.786c3.593 0 6.615 1.127 6.615 4.847 0 2.231-1.313 3.966-3.792 4.372l4.46 6.74h-4.632l-3.667-6.38h-1.907v6.38h-3.864V71.083zm3.863 6.604h2.279c1.412 0 3.246-.045 3.246-1.78 0-1.6-1.587-1.848-2.998-1.848h-2.527v3.628zm33.119-2.704c-.62-.721-1.858-1.06-2.8-1.06-1.09 0-2.602.45-2.602 1.646 0 2.907 8.077 1.037 8.077 6.627 0 3.562-3.146 5.25-6.763 5.25-2.254 0-4.236-.607-5.896-2.004l2.75-2.75c.793.947 2.08 1.51 3.368 1.51 1.265 0 2.676-.54 2.676-1.668 0-2.929-8.224-1.352-8.224-6.671 0-3.404 3.244-5.184 6.688-5.184 1.981 0 3.888.473 5.375 1.668l-2.65 2.636zm17.017-3.9h3.865v15.959h-3.865V71.083zm21.796 3.11h-5.005v-3.109h13.873v3.11h-5.004v12.848h-3.864V74.194zm26.033 6.042l-6.59-9.152h4.807l3.717 5.973 3.938-5.973h4.584l-6.59 9.152v6.807h-3.865v-6.807h-.001z'
                />
            </g>
        )
    }
    if (icon === 'alert') {
        return (
            <path d='M13.339 1.75a1.54 1.54 0 0 0-1.33-.75c-.551 0-1.055.285-1.33.75L.206 19.749a1.47 1.47 0 0 0 0 1.502c.29.465.795.751 1.33.751h20.946c.55 0 1.056-.285 1.315-.75.265-.465.27-1.033.015-1.503L13.34 1.75zm.2 17.246H10.48v-3.005h3.059v3.005zm0-4.506H10.48V8.48h3.059v6.01z' />
        )
    }
    if (icon === 'arrowDown') {
        return <path d='M16.8 9.6V0H7.2v9.6H0L12 24 24 9.6z' />
    }
    if (icon === 'github') {
        return (
            <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z' />
        )
    }
    if (icon === 'info') {
        return (
            <path d='M10.8 8.074a1.615 1.615 0 0 1-.48-1.2c0-.48.154-.891.48-1.2.326-.308.72-.48 1.2-.48s.891.155 1.2.48c.309.326.48.72.48 1.2s-.154.892-.48 1.2a1.714 1.714 0 0 1-1.2.515c-.48 0-.891-.189-1.2-.515zm2.914 3.943a1.866 1.866 0 0 0-.531-1.183c-.343-.325-.72-.514-1.183-.531h-1.714c-.463.034-.823.223-1.183.531a1.748 1.748 0 0 0-.532 1.183h1.715v5.143c.034.463.188.857.531 1.183.343.343.72.531 1.183.531h1.714c.463 0 .823-.188 1.183-.531.343-.326.514-.72.532-1.183h-1.715V12v.017zM12 2.263c-5.383 0-9.771 4.354-9.771 9.737S6.617 21.771 12 21.771c5.383 0 9.771-4.371 9.771-9.771S17.383 2.246 12 2.246v.017zM12 0c6.617 0 12 5.383 12 12s-5.383 12-12 12S0 18.651 0 12 5.383 0 12 0z' />
        )
    }
    if (icon === 'plus') {
        return <path d='M24 14H14v10h-4V14H0v-4h10V0h4v10h10z' />
    }
    if (icon === 'verified') {
        return (
            <path d='M23.503 10.598l-1.62-2.01a2.25 2.25 0 0 1-.463-1.155l-.285-2.547A2.265 2.265 0 0 0 19.14 2.89l-2.548-.285c-.45-.045-.84-.239-1.17-.494L13.416.494a2.256 2.256 0 0 0-2.817 0l-2.01 1.62a2.25 2.25 0 0 1-1.155.465l-2.547.285a2.264 2.264 0 0 0-1.995 1.993l-.285 2.549c-.045.45-.238.84-.493 1.17L.494 10.58a2.256 2.256 0 0 0 0 2.817l1.62 2.01c.255.33.42.72.465 1.155l.285 2.547a2.264 2.264 0 0 0 1.993 1.995l2.549.285c.45.045.84.238 1.17.493l2.008 1.62a2.255 2.255 0 0 0 2.817 0l2.01-1.62c.33-.255.72-.42 1.155-.465l2.547-.285a2.264 2.264 0 0 0 1.995-1.993l.285-2.549c.045-.45.238-.84.493-1.17l1.62-2.008a2.256 2.256 0 0 0 0-2.817l-.003.002zM9.758 18L4.51 12.756l2.25-2.25 2.997 3 7.495-7.495L19.5 8.334l-9.743 9.667z' />
        )
    }
    if (icon === 'warning') {
        return (
            <g fill='none' fillRule='evenodd'>
                <circle cx='12' cy='12' fill='#000' r='10' />
                <path d='M13.824 17.538H10V14.67h3.824zm0-4.301H10V5.07h3.824z' fill='#fff' />
            </g>
        )
    }
    if (icon === 'x') {
        return (
            <path d='M15.396 12L24 20.604 20.604 24 12 15.396 3.396 24 0 20.604 8.604 12 0 3.396 3.396 0 12 8.604 20.604 0 24 3.396z' />
        )
    }

    return <div />
}
export default IconPath