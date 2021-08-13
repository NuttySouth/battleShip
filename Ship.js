export const shipFactory = (length)=>{

    let health = length;
    let isSunk = () => health <= 0;
    const hit = ()=>{health--};
    const getHealth = () => health;

    return {
        isSunk, hit, getHealth
    }
}
