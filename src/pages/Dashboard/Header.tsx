import React, { SetStateAction } from 'react';

function Header({ setIsAdding }: { setIsAdding: React.Dispatch<SetStateAction<boolean>> }) {
    return (
        <header>
            <h1>Employee Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Button</button>
            </div>
        </header>
    )
}

export default Header;
