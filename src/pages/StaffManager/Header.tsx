import React, { SetStateAction } from 'react';

function Header({ setIsAdding }: { setIsAdding: React.Dispatch<SetStateAction<boolean>> }) {
    return (
        <header>
            <h2>Staff Management Module</h2>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
            </div>
        </header>
    )
}

export default Header;
