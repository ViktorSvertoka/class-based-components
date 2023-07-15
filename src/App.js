import CustomerFilter from './components/CustomerFilter';
import CustomersContext from './store/customers-context';

const DUMMY_CUSTOMERS = [
  { id: 'c1', name: 'Дмитро' },
  { id: 'c2', name: 'Михайло' },
  { id: 'c3', name: 'Ірина' },
];

function App() {
  const customersContext = {
    customers: DUMMY_CUSTOMERS,
  };

  return (
    <CustomersContext.Provider value={customersContext}>
      <CustomerFilter />
    </CustomersContext.Provider>
  );
}

export default App;
