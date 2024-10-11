#include <iostream>
using namespace std;
// #include<bits/stdc++.h>

int main() {
	int n;
	cin>>n;
	
	// ans.push_back(n);
    cout<<n<<" ";
	while(n!=1)
	{
	    
	    if(n%2==1)
	    {
	        n=(n*3)+1;
	    }
	    else{
	        n/=2;
	    }
	    cout<<n<<" ";
	    
	}
	// for(int i=0;i<ans.size();i++)
	// cout<<ans[i]<<" ";
	return 0;
}