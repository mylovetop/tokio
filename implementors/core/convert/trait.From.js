(function() {var implementors = {};
implementors["tokio_current_thread"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/enter/struct.EnterError.html\" title=\"struct tokio_executor::enter::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.RunTimeoutError.html\" title=\"struct tokio_current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:false,types:["tokio_current_thread::RunTimeoutError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tokio_executor/enter/struct.EnterError.html\" title=\"struct tokio_executor::enter::EnterError\">EnterError</a>&gt; for <a class=\"struct\" href=\"tokio_current_thread/struct.BlockError.html\" title=\"struct tokio_current_thread::BlockError\">BlockError</a>&lt;T&gt;",synthetic:false,types:["tokio_current_thread::BlockError"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/fs/struct.OpenOptions.html\" title=\"struct std::fs::OpenOptions\">StdOpenOptions</a>&gt; for <a class=\"struct\" href=\"tokio_fs/struct.OpenOptions.html\" title=\"struct tokio_fs::OpenOptions\">OpenOptions</a>",synthetic:false,types:["tokio_fs::file::open_options::OpenOptions"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()