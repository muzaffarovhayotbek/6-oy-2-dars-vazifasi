import Address from '../Adress';
import Car from '../Car';
import './index.css';

function User(props) {
  const { firstName, lastName, phone, email, address, image, cars } =
    props.user;
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3 className="name">
        {firstName} {lastName}{' '}
      </h3>
      <div>
        <span className='email'>{email}</span>
        <span className='phone'>{phone}</span>
      </div>
      <Address address={address}></Address>
      {cars.length > 0 &&
        cars.map((car, index) => {
          return <Car car={car}></Car>;
        })}

      {!cars.length && <p>Avtomobil mavjud emas</p>}
    </div>
  );
}

export default User;
