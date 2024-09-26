https://course.acciojob.com/open-web-editor?question=c2fe534a-e405-494a-afd4-56c98851e090



const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  let i=0;
	let s=0;
	let arr1=[];
	let curr=[];
	while(i<arr.length)
		{
			s+=arr[i];
			if(s>n)
			{
				s=arr[i];
				arr1.push(curr);
				curr=[];
			}
			curr.push(arr[i]);
			i++;
		}
	if(curr.length>0)
	{
		arr1.push(curr);
	}
	return arr1;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
