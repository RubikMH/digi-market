const useFilter = (myArry = [{ sys: { id: null } }], id) => {
    const chekId = (element) => {
        if (element.sys.id === id) {
            return element;
        }
    };

    myArry.find(chekId());
};
export default useFilter;