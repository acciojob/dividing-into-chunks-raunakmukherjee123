const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let i=0;
	let s=0;
	let arr=[];
	let curr=[];
	while(i<arr.length)
		{
			s+=arr[i];
			if(s>n)
			{
				s=0;
				arr.push(curr);
				curr=[];
			}
			curr.push(s);
			i++;
		}
	if(curr.length>0)
	{
		arr.push(curr);
	}
	return arr;
};

//const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
